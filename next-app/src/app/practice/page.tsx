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

import starBucks from "../../../public/images/bgImg2.png";
import book from "../../../public/images/bgImg4.png";
import admins from "../../../public/images/bgImg6.png";
import spotify from "../../../public/icon/spotifyIcon.svg";

const tabs = ["All", "About", "Projects", "Media"];
const layouts = {
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

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [layout, setLayout] = useState(layouts["All"]);
  const gridRef = useRef<HTMLDivElement | null>(null);

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
          isDraggable={true}
          isResizable={false}>
          {layout.map((item) => (
            <div key={item.i} className={styles[item.i]}>
              {item.i === "profile" && (
                <p>
                  I’m{" "}
                  <span
                    style={{ fontFamily: "Moranga Bold", fontSize: "40px" }}>
                    nev
                  </span>
                  , a developer...
                </p>
              )}
              {item.i === "map" && <div>Map</div>}
              {item.i === "star" && (
                <Image
                  alt="starBucks"
                  src={starBucks}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
              {item.i === "spotify" && (
                <div>
                  <Image alt="spotify" src={spotify} />
                  <p style={{ color: "rgb(110, 210, 183)", fontWeight: 500 }}>
                    Offline. Last played
                  </p>
                  <h2>I Don't Belong</h2>
                </div>
              )}
              {item.i === "card" && (
                <Image
                  alt="twitter"
                  src={twitterIcon}
                  className={styles.twitterIcon}
                />
              )}
              {item.i === "article" && (
                <Image
                  alt="book"
                  src={book}
                  style={{ width: "100%", height: "100%" }}
                />
              )}
              {item.i === "wideCard" && (
                <h2>How it started vs. how it's going</h2>
              )}
              {item.i === "darkMode" && (
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              )}
              {item.i === "admin" && (
                <Image alt="admins" src={admins} style={{ width: "100%" }} />
              )}
              {item.i === "subscribe" && <h2>Shall I keep you in the loop?</h2>}
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
