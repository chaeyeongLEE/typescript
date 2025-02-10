"use client";

import React, { useEffect, useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css"; // 기본 스타일
import "react-resizable/css/styles.css"; // 리사이즈 스타일
import styles from "./company.module.scss";
import gsap from "gsap";
import { Flip } from "gsap/all";

const tabs = ["All", "About", "Projects", "Media"];

// ✅ 각 탭에 따른 "스위칭" 가능한 그리드 레이아웃 설정
const layouts = {
  All: [
    { i: "1", x: 0, y: 0, w: 2, h: 1 },
    { i: "2", x: 2, y: 0, w: 2, h: 1 },
    { i: "3", x: 0, y: 1, w: 1, h: 1 },
    { i: "4", x: 1, y: 1, w: 3, h: 1 },
  ],
  About: [
    { i: "1", x: 1, y: 0, w: 2, h: 1 },
    { i: "2", x: 0, y: 1, w: 2, h: 1 },
    { i: "3", x: 2, y: 1, w: 2, h: 1 },
    { i: "4", x: 1, y: 2, w: 2, h: 1 },
  ],
  Projects: [
    { i: "1", x: 0, y: 0, w: 1, h: 2 },
    { i: "2", x: 1, y: 0, w: 3, h: 1 },
    { i: "3", x: 1, y: 1, w: 1, h: 1 },
    { i: "4", x: 2, y: 1, w: 2, h: 1 },
  ],
  Media: [
    { i: "1", x: 0, y: 0, w: 2, h: 1 },
    { i: "2", x: 2, y: 0, w: 2, h: 1 },
    { i: "3", x: 1, y: 1, w: 3, h: 1 },
    { i: "4", x: 0, y: 2, w: 2, h: 1 },
  ],
};

const Practice = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [layout, setLayout] = useState(layouts["All"]);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  const changeLayout = (tab: string) => {
    setActiveTab(tab);

    if (!gridRef.current) return;
    const state = Flip.getState(gridRef.current); // ✅ 현재 상태 저장

    setLayout(layouts[tab]); // ✅ 새로운 레이아웃 적용

    Flip.from(state, {
      duration: 1.2,
      ease: "power2.inOut",
      absolute: true, // ✅ 요소가 실제 위치에서 애니메이션되도록 설정
      scale: true, // ✅ 크기 변화 적용
      stagger: 0.05, // ✅ 요소 하나씩 자연스럽게 변경
      fade: true, // ✅ 투명도 조정하여 자연스럽게 변화
    });
  };

  return (
    <div className={styles.container}>
      {/* 네비게이션 */}
      <div className={styles.nav}>
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`${styles["nav-item"]} ${activeTab === tab ? styles.active : ""}`}
            onClick={() => changeLayout(tab)}>
            {tab}
          </div>
        ))}
      </div>

      {/* 그리드 레이아웃 */}
      <div ref={gridRef} className={styles.dashboard}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={100}
          width={600}
          isDraggable={true} // 드래그 불가능
          isResizable={false} // 크기 조절 불가능
        >
          {layout.map((item) => (
            <div key={item.i} className={styles.card}>
              Card {item.i}
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default Practice;
