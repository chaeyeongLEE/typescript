"use client";

import React, { useEffect, useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import styles from "./practice.module.scss";
import gsap from "gsap";
import { Flip } from "gsap/all";
import Image from "next/image";
import twitterIcon from "../../../public/icon/twitterIcon.png";
import arrowIcon from "../../../public/icon/arrow.svg";
import starBucks from "../../../public/images/bgImg2.png";
import book from "../../../public/images/bgImg4.png";
import admins from "../../../public/images/bgImg6.png";
import spotify from "../../../public/icon/spotifyIcon.svg";
import CustomButton from "@/components/CustomButton/CustomButton";
import memoji1 from "../../../public/images/memoji1.png";
import memoji2 from "../../../public/images/memoji2.png";

type Widget = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Layouts = Record<string, Widget[]>;

const tabs = ["All", "About", "Projects", "Media"];
const layouts: Layouts = {
  All: [
    { i: "profile", x: 0, y: 0, w: 2, h: 1 },
    { i: "map", x: 2, y: 0, w: 1, h: 1 },
    { i: "star", x: 3, y: 0, w: 1, h: 2 },

    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "card", x: 1, y: 1, w: 1, h: 1 }, //트위터
    { i: "darkMode", x: 3, y: 3, w: 1, h: 1 },

    { i: "article", x: 2, y: 1, w: 1, h: 2 },
    { i: "wideCard", x: 0, y: 3, w: 2, h: 1 },
    { i: "admin", x: 0, y: 5, w: 2, h: 1 },
    { i: "subscribe", x: 2, y: 5, w: 2, h: 1 },
  ],
  About: [
    { i: "profile", x: 0, y: 0, w: 2, h: 1 },
    { i: "map", x: 2, y: 0, w: 1, h: 1 },
    { i: "card", x: 3, y: 0, w: 1, h: 1 }, //트위터
    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "darkMode", x: 1, y: 2, w: 1, h: 1 },
    { i: "article", x: 2, y: 1, w: 1, h: 2 },
    { i: "star", x: 3, y: 1, w: 1, h: 2 },
    { i: "wideCard", x: 0, y: 3, w: 2, h: 1 },
    { i: "admin", x: 0, y: 5, w: 2, h: 1 },
    { i: "subscribe", x: 2, y: 5, w: 2, h: 1 },
  ],
  Projects: [
    { i: "spotify", x: 0, y: 3, w: 1, h: 1 },
    { i: "profile", x: 0, y: 1, w: 2, h: 1 },
    { i: "map", x: 2, y: 2, w: 1, h: 1 },
    { i: "card", x: 3, y: 2, w: 1, h: 1 }, //트위터

    { i: "darkMode", x: 1, y: 2, w: 1, h: 1 },

    { i: "admin", x: 0, y: 0, w: 2, h: 1 },
    { i: "article", x: 2, y: 0, w: 1, h: 2 },
    { i: "star", x: 3, y: 0, w: 1, h: 2 },

    { i: "wideCard", x: 0, y: 3, w: 2, h: 1 },
    { i: "subscribe", x: 2, y: 5, w: 2, h: 1 },
  ],
  Media: [
    { i: "admin", x: 0, y: 3, w: 2, h: 1 },
    { i: "profile", x: 0, y: 5, w: 2, h: 1 },
    { i: "subscribe", x: 2, y: 0, w: 2, h: 1 },
    { i: "wideCard", x: 0, y: 0, w: 2, h: 1 },

    { i: "darkMode", x: 2, y: 3, w: 1, h: 1 },
    { i: "map", x: 1, y: 2, w: 1, h: 1 },
    { i: "card", x: 3, y: 3, w: 1, h: 1 }, //트위터
    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "article", x: 2, y: 1, w: 1, h: 2 },
    { i: "star", x: 3, y: 1, w: 1, h: 2 },
  ],
};
const highlightMap: Record<string, string[]> = {
  All: [],
  About: ["map", "profile", "card"],
  Projects: ["admin", "article", "star"],
  Media: ["subscribe", "wideCard", "spotify"],
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [layout, setLayout] = useState(layouts["All"]);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [memoji, setMemoji] = useState(memoji1);

  useEffect(() => {
    gsap.registerPlugin(Flip);
  }, []);

  const changeLayout = (tab: string) => {
    setActiveTab(tab);
    if (!gridRef.current) return;

    const state = Flip.getState(gridRef.current);
    setLayout(layouts[tab]);
    Flip.from(state, {
      duration: 1.2,
      ease: "power2.inOut",
      absolute: true,
      scale: true,
      stagger: 0.05,
      fade: true,
    });
  };

  function isSubscribeClick() {
    console.log("버튼 클릭 됨");
  }

  function isToggleClick() {
    const memojiElement = document.getElementById("memoji"); // ✅ 이미지 요소 가져오기

    if (memojiElement) {
      gsap.to(memojiElement, {
        duration: 0.3,
        opacity: 0,
        scale: 0.5,
        rotate: -90,
        onComplete: () => {
          setMemoji(memoji === memoji1 ? memoji2 : memoji1);

          gsap.fromTo(
            memojiElement,
            { opacity: 0, scale: 0.5, rotate: -90 },
            {
              opacity: 1,
              scale: 1,
              rotate: 0,
              duration: 0.5,
              ease: "power2.out",
            }
          );
        },
      });
    }
  }

  return (
    <div className={styles.container}>
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

      <div ref={gridRef} className={styles.dashboard}>
        <GridLayout
          className="layout"
          layout={layout}
          cols={4}
          rowHeight={280}
          width={1180}
          draggableCancel=".no-drag"
          isDraggable={true}
          isResizable={false}>
          {layout.map((item) => (
            <div
              key={item.i}
              className={styles[item.i]}
              style={{
                opacity:
                  activeTab === "All" ||
                  highlightMap[activeTab]?.includes(item.i)
                    ? "1"
                    : "0.3",
              }}>
              {item.i === "profile" && (
                <>
                  <div>
                    <Image
                      alt="memogi1"
                      src={memoji}
                      style={{
                        width: "90px",
                        height: "90px",
                      }}
                      id="memoji"
                    />
                    <CustomButton
                      title="Toggle Lockdown"
                      type="button"
                      disabled={false}
                      className="no-drag"
                      handleClick={isToggleClick}></CustomButton>
                  </div>
                  <p>
                    I’m <span style={{ fontSize: "40px" }}>nev</span>, a
                    developer and product designer from Ireland. I'm interested
                    in React, Node, Product Design, Jamstack, Startups,
                    Cryptocurrencies and Music.
                  </p>
                </>
              )}
              {item.i === "map" && <div>Map</div>}
              {item.i === "star" && (
                <Image
                  alt="starBucks"
                  src={starBucks}
                  style={{ width: "107%", height: "100%" }}
                />
              )}
              {item.i === "spotify" && (
                <>
                  <Image alt="spotify" src={spotify} />
                  <article>
                    <div className={styles.equalizer}>
                      <span className={styles.bar}></span>
                      <span className={styles.bar}></span>
                      <span className={styles.bar}></span>
                      <p>Offline. Last played</p>
                    </div>
                    <h2>I Don't Belong</h2>
                    <p style={{ letterSpacing: "1.2px" }}>Fontaines D.C.</p>
                  </article>
                </>
              )}
              {item.i === "card" && (
                <>
                  <Image
                    alt="twitter"
                    src={twitterIcon}
                    className={styles.twitterIcon}
                  />
                  <a className={`${styles.arrow} no-drag`}>
                    <Image alt="" src={arrowIcon} />
                  </a>
                </>
              )}
              {item.i === "article" && (
                <Image
                  alt="book"
                  src={book}
                  style={{ width: "107%", height: "100%" }}
                />
              )}
              {item.i === "wideCard" && (
                <>
                  <h2>How it started vs. how it's going</h2>
                  <span>
                    A short personal history as it relates to design and
                    development, and how I've found value in the cross-section
                    between both disciplines.
                  </span>
                  <aside className={styles.box}>
                    <CustomButton
                      title="Read more"
                      type="button"
                      disabled={false}
                      className="no-drag"
                      handleClick={isSubscribeClick}>
                      Subscribe
                    </CustomButton>
                    <p>Feb 7, 2025</p>
                  </aside>
                </>
              )}
              {item.i === "darkMode" && (
                <label className={`${styles.switch} no-drag`}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              )}
              {item.i === "admin" && (
                <Image alt="admins" src={admins} style={{ width: "107%" }} />
              )}
              {item.i === "subscribe" && (
                <div>
                  <h2>Shall I keep you in the loop?</h2>
                  <p>
                    Content includes articles, early access to products, and{" "}
                    <br />
                    ongoing learnings.
                  </p>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="no-drag"
                  />
                  <aside>
                    <CustomButton
                      title="Subscribe"
                      type="button"
                      disabled={false}
                      className="no-drag"
                      handleClick={isSubscribeClick}></CustomButton>
                    <p>
                      You'll be subscriber number{" "}
                      <span style={{ fontSize: "30px" }}>542</span>
                    </p>
                  </aside>
                </div>
              )}
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
