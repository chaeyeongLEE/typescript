"use client";

import React, { useState } from "react";
import styles from "./practice.module.scss";
import Image from "next/image";
import twitterIcon from "../../../public/icon/twitterIcon.png";
import arrowIcon from "../../../public/icon/arrow.svg";

import starBucks from "../../../public/images/bgImg2.png";
import book from "../../../public/images/bgImg4.png";
import admins from "../../../public/images/bgImg6.png";
import spotify from "../../../public/icon/spotifyIcon.svg";

import CustomButton from "@/components/CustomButton/CustomButton";

const Practice = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  function isSubscribeClick() {
    console.log("subscribe click");
  }

  return (
    <div className={styles.dashboard}>
      <section className={styles.profile}>
        <p className="">
          I’m{" "}
          <span style={{ fontFamily: "Moranga Bold", fontSize: "40px" }}>
            nev
          </span>
          , a developer and product designer from Ireland. I'm interested in
          React, Node, Product Design, Jamstack, Startups, Cryptocurrencies and
          Music.
        </p>
      </section>
      <section className={styles.map}>Map Section</section>
      <section className={styles.star}>
        <Image
          alt="starBucks"
          src={starBucks}
          className={styles.starImage}
          style={{ width: "280px" }}
        />
      </section>
      <section className={styles.spotify}>
        <Image alt="spotify" src={spotify} />
        <article>
          <p style={{ color: "rgb(110, 210, 183)", fontWeight: 500 }}>
            Offline. Last played
          </p>
          <h2>I Don't Belong</h2>
          <p style={{ letterSpacing: "1.2px" }}>Fontaines D.C.</p>
        </article>
        {/*<div className={styles.spotifyBox}>*/}
        {/*  <div className={styles.spotifyMusic}></div>*/}
        {/*  <div className={styles.spotifyMusic}></div>*/}
        {/*  <div className={styles.spotifyMusic}></div>*/}
        {/*</div>*/}
      </section>
      <section className={styles.card}>
        <Image alt="twitter" src={twitterIcon} className={styles.twitterIcon} />
        <a className={styles.arrow}>
          <Image alt="" src={arrowIcon} />
        </a>
      </section>
      <section className={styles.article}>
        <Image alt="starBucks" src={book} style={{ width: "280px" }} />
      </section>
      <section className={styles.wideCard}>
        <div className={styles.textBox}>
          <h2>How it started vs. how it's going</h2>
          <p>
            A short personal history as it relates to design and development,
            and how I've found value in the cross-section between both
            disciplines.
          </p>
        </div>
        <div className={styles.box}>
          <CustomButton
            title="Read more"
            type="button"
            disabled={false}
            className="subscribeBtn"
            handleClick={isSubscribeClick}>
            Subscribe
          </CustomButton>
          <p>Feb 7, 2025</p>
        </div>
      </section>
      <section className={styles.darkMode}>
        <label className={styles.switch}>
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className={styles.slider}></span>
        </label>
      </section>
      <section className={styles.admin}>
        <Image alt="admins" src={admins} style={{}} />
      </section>
      <section className={styles.subscribe}>
        <h2>Shall I keep you in the loop?</h2>
        <p>
          Content includes articles, early access to products, and <br />
          ongoing learnings.
        </p>
        <input type="text" placeholder="Email address" />
        <div>
          <CustomButton
            title="subscribe"
            type="button"
            disabled={false}
            className="subscribeBtn"
            handleClick={isSubscribeClick}>
            Subscribe
          </CustomButton>
          <p>
            You'll be subscriber number{" "}
            <span style={{ fontFamily: "Moranga Bold", fontSize: "30px" }}>
              541
            </span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Practice;
