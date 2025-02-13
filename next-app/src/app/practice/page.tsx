"use client";

import React, { useEffect, useRef, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import styles from "./practice.module.scss";
import gsap from "gsap";
import { Flip } from "gsap/all";
import Image from "next/image";
import CustomButton from "@/components/CustomButton/CustomButton";
import memoji1 from "../../../public/images/ciImg.webp";
import memoji2 from "../../../public/images/ciImg2.webp";
import arrowIcon from "../../../public/icon/arrow.svg";
import arrowDownIcon from "../../../public/icon/arrow_down.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

type Widget = {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Layouts = {
  [name: string]: Widget[];
};

const tabs = [
  "전국 사무소",
  "업무 사례",
  "변호사 매칭",
  "상담 센터",
  // "임시 테스트",
];
const layouts: Layouts = {
  "전국 사무소": [
    { i: "profile", x: 0, y: 0, w: 2, h: 1 },
    { i: "mapSec", x: 2, y: 0, w: 2, h: 2 },
    { i: "desc", x: 0, y: 1, w: 2, h: 1 },

    // { i: "star", x: 3, y: 0, w: 1, h: 1 },
    { i: "example", x: 0, y: 1, w: 2, h: 1 },
    // { i: "card", x: 1, y: 1, w: 1, h: 1 },

    { i: "darkMode", x: 1, y: 3, w: 1, h: 1 }, //의뢰인 후기
    { i: "subscribe", x: 0, y: 3, w: 1, h: 1 },

    { i: "qna", x: 1, y: 4, w: 1, h: 1 },
    { i: "counsel", x: 0, y: 4, w: 1, h: 1 },

    { i: "article", x: 2, y: 1, w: 2, h: 1 },
    { i: "wideCard", x: 2, y: 3, w: 2, h: 2 }, //변호사 매칭

    { i: "broad", x: 0, y: 5, w: 1, h: 1 },
    { i: "youtube", x: 1, y: 5, w: 1, h: 1 },
    { i: "news", x: 2, y: 5, w: 2, h: 1 },
  ],
  "업무 사례": [
    { i: "example", x: 0, y: 0, w: 2, h: 1 }, // yk는 ~ 희망이되었습니다.
    // { i: "card", x: 1, y: 0, w: 1, h: 1 },
    { i: "article", x: 2, y: 0, w: 2, h: 1 }, //업무사례
    // { i: "star", x: 3, y: 0, w: 1, h: 1 },

    { i: "profile", x: 0, y: 1, w: 2, h: 1 },
    { i: "mapSec", x: 2, y: 1, w: 2, h: 2 },
    { i: "desc", x: 0, y: 1, w: 2, h: 1 },

    { i: "darkMode", x: 3, y: 3, w: 1, h: 1 },
    { i: "subscribe", x: 2, y: 3, w: 1, h: 1 },

    { i: "qna", x: 3, y: 4, w: 1, h: 1 },
    { i: "counsel", x: 2, y: 4, w: 1, h: 1 },

    { i: "wideCard", x: 0, y: 3, w: 2, h: 2 },
    { i: "broad", x: 0, y: 5, w: 1, h: 1 },
    { i: "youtube", x: 1, y: 5, w: 1, h: 1 },
    { i: "news", x: 2, y: 5, w: 2, h: 1 },
  ],
  "변호사 매칭": [
    { i: "wideCard", x: 0, y: 0, w: 2, h: 2 },
    { i: "profile", x: 0, y: 1, w: 2, h: 1 },
    { i: "mapSec", x: 2, y: 0, w: 2, h: 2 },
    { i: "desc", x: 0, y: 1, w: 2, h: 1 },

    // { i: "star", x: 3, y: 2, w: 1, h: 1 },
    { i: "example", x: 0, y: 1, w: 2, h: 1 },
    { i: "article", x: 2, y: 3, w: 2, h: 1 },
    // { i: "card", x: 1, y: 1, w: 1, h: 1 },

    { i: "darkMode", x: 3, y: 0, w: 1, h: 1 }, //의뢰인 후기
    { i: "subscribe", x: 2, y: 0, w: 1, h: 1 }, //Q&A라운지
    { i: "qna", x: 3, y: 0, w: 1, h: 1 }, //1:1상담
    { i: "counsel", x: 2, y: 1, w: 1, h: 1 }, //카카오톡상담

    { i: "broad", x: 0, y: 5, w: 1, h: 1 },
    { i: "youtube", x: 1, y: 5, w: 1, h: 1 },
    { i: "news", x: 2, y: 5, w: 2, h: 1 },
  ],
  "상담 센터": [
    { i: "profile", x: 0, y: 0, w: 2, h: 1 },
    { i: "desc", x: 0, y: 0, w: 2, h: 1 },

    { i: "wideCard", x: 0, y: 1, w: 2, h: 2 },
    { i: "mapSec", x: 2, y: 1, w: 2, h: 2 },

    // { i: "star", x: 3, y: 2, w: 1, h: 1 },
    { i: "example", x: 0, y: 1, w: 2, h: 1 },
    // { i: "card", x: 1, y: 1, w: 1, h: 1 },
    { i: "article", x: 2, y: 3, w: 2, h: 1 },

    { i: "darkMode", x: 3, y: 0, w: 1, h: 1 }, //의뢰인 후기
    { i: "subscribe", x: 2, y: 0, w: 1, h: 1 }, //Q&A라운지
    { i: "qna", x: 3, y: 0, w: 1, h: 1 }, //1:1상담
    { i: "counsel", x: 2, y: 1, w: 1, h: 1 }, //카카오톡상담

    { i: "broad", x: 0, y: 5, w: 1, h: 1 },
    { i: "youtube", x: 1, y: 5, w: 1, h: 1 },
    { i: "news", x: 2, y: 5, w: 2, h: 1 },
  ],
  "임시 테스트": [
    { i: "profile", x: 0, y: 0, w: 2, h: 1 },
    { i: "mapSec", x: 2, y: 0, w: 2, h: 2 },
    { i: "desc", x: 0, y: 1, w: 2, h: 1 },

    { i: "star", x: 3, y: 0, w: 1, h: 1 },
    { i: "example", x: 0, y: 1, w: 1, h: 1 },
    { i: "card", x: 1, y: 1, w: 1, h: 1 },

    { i: "darkMode", x: 1, y: 3, w: 2, h: 2 }, //의뢰인 후기
    { i: "subscribe", x: 3, y: 3, w: 1, h: 1 }, //Q&A라운지

    { i: "qna", x: 3, y: 4, w: 1, h: 1 },
    // { i: "counsel", x: 2, y: 4, w: 1, h: 1 },

    { i: "article", x: 2, y: 1, w: 1, h: 1 },
    { i: "wideCard", x: 0, y: 3, w: 1, h: 2 }, //변호사 매칭

    { i: "broad", x: 0, y: 5, w: 1, h: 1 },
    { i: "youtube", x: 1, y: 5, w: 1, h: 1 },
    { i: "news", x: 2, y: 5, w: 2, h: 1 },
  ],
};
const highlightMap: Record<string, string[]> = {
  "전국 사무소": [],
  "업무 사례": ["card", "example", "article", "star", "mapSec"],
  "변호사 매칭": ["wideCard", "mapSec"],
  "상담 센터": [
    "subscribe",
    "darkMode",
    "counsel",
    "qna",
    "profile",
    "desc",
    "mapSec",
  ],
  "임시 테스트": [
    "subscribe",
    "darkMode",
    "counsel",
    "qna",
    "profile",
    "desc",
    "mapSec",
    "card",
    "example",
    "article",
    "star",
    "mapSec",
    "youtube",
    "news",
    "broad",
    "wideCard",
  ],
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("전국 사무소");
  const [layout, setLayout] = useState(layouts["전국 사무소"]);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [memoji, setMemoji] = useState(memoji1);
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    initialSlide: 0, //초기슬라이드 0번째부터
    draggable: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
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
    const memojiElement = document.getElementById("memoji");

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
          rowHeight={230}
          width={970}
          draggableCancel=".no-drag"
          style={{
            width: "970px",
            margin: "0 auto",
          }}
          isDraggable={true}
          isResizable={true}>
          {layout.map((item) => (
            <div
              key={item.i}
              className={styles[item.i]}
              style={{
                opacity:
                  activeTab === "전국 사무소" ||
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
                        maxWidth: "100px",
                        maxHeight: "68px",
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
                  <h2>대한민국 7위 로펌 법무법인 YK</h2>
                  <p>
                    당신이 필요로 하는 모든 곳에 YK가 있습니다.
                    <br />내 일처럼 진심을 다하는 변호사를 만나보세요.
                  </p>
                </>
              )}
              {item.i === "mapSec" && (
                <>
                  {/*<Map />*/}
                  <p></p>
                </>
              )}
              {item.i === "example" && (
                <h4 style={{ fontWeight: 700 }}>
                  YK는 16,500+ 명에게 희망이 되었습니다.
                  <br />
                  <br /> 이번엔 당신이 이길 차례입니다.
                </h4>
              )}

              {item.i === "desc" && (
                <div>
                  <section>
                    <span>YK변호사</span>
                    <p>369명</p>
                  </section>
                  <section>
                    <span>누적 성공사례</span>
                    <p>12,254건</p>
                  </section>
                  <section>
                    <span>업무분야</span>
                    <p>00개</p>
                  </section>

                  {/*<Image alt="desc
                  " src={desc
                  } />*/}
                  {/*<article>*/}
                  {/*  <div className={styles.equalizer}>*/}
                  {/*    <span className={styles.bar}></span>*/}
                  {/*    <span className={styles.bar}></span>*/}
                  {/*    <span className={styles.bar}></span>*/}
                  {/*    <p>Offline. Last played</p>*/}
                  {/*  </div>*/}
                  {/*  <h2>I Don't Belong</h2>*/}
                  {/*  <p style={{ letterSpacing: "1.2px" }}>Fontaines D.C.</p>*/}
                  {/*</article>*/}
                </div>
              )}
              {item.i === "card" && (
                <>
                  <h2>업무사례1</h2>

                  <span>
                    게시물 내용 입니다. 게시물 내용 입니다. 게시물 내용 입니다.
                    <br />
                    게시물 내용 입니다. 게시물 내용 입니다.
                    <br />
                  </span>
                  <div>
                    <p>업무사례 소송 결과</p>
                    <a className={`${styles.arrow} no-drag`}>
                      <Image alt="" src={arrowIcon} />
                    </a>
                  </div>
                </>
              )}
              {item.i === "article" && (
                <div className={`${styles.carouselWrapper} no-drag`}>
                  <Slider {...settings}>
                    {[1, 2, 3].map((num) => (
                      <div key={num}>
                        <h2>업무사례{num}</h2>
                        <span>
                          게시물 내용 입니다. 게시물 내용 입니다. 게시물 내용
                          입니다.
                          <br />
                          게시물 내용 입니다. 게시물 내용 입니다.
                          <br />
                        </span>
                        <p>업무사례 소송 결과{num}</p>
                      </div>
                    ))}
                  </Slider>
                </div>
              )}
              {item.i === "star" && (
                <>
                  <h2>업무사례3</h2>

                  <span>
                    게시물 내용 입니다. 게시물 내용 입니다. 게시물 내용 입니다.
                    <br />
                    게시물 내용 입니다. 게시물 내용 입니다.
                    <br />
                  </span>
                  <div>
                    <p>업무사례 소송 결과</p>
                    <a className={`${styles.arrow} no-drag`}>
                      <Image alt="" src={arrowIcon} />
                    </a>
                  </div>
                </>
              )}
              {item.i === "wideCard" && (
                <>
                  <h2>변호사 매칭</h2>
                  <span>
                    좋은 변호사 찾기, 아직도 발품 팔고 계신가요? <br />내 상황에
                    꼭 맞는 변호사를 확인해보세요.
                  </span>
                  <aside className={styles.box}>
                    <div className={`${styles.dropdown} no-drag`}>
                      <button className={styles.dropBtn}>
                        분야 선택
                        <Image alt="" src={arrowDownIcon} />
                      </button>
                      <div className={styles.content}>
                        <a href="#">형사</a>
                      </div>
                    </div>
                    <div className={`${styles.dropdown} no-drag`}>
                      <button className={styles.dropBtn}>
                        세부 분야 선택
                        <Image alt="" src={arrowDownIcon} />
                      </button>
                      <div className={styles.content}>
                        <a href="#">성범죄</a>
                      </div>
                    </div>
                    <CustomButton
                      title="변호사 찾기"
                      type="button"
                      disabled={false}
                      className={`${styles.seachBtn} no-drag`}
                      handleClick={isSubscribeClick}>
                      변호사 찾기
                    </CustomButton>
                  </aside>
                </>
              )}
              {item.i === "darkMode" && (
                <div>
                  <h2>의뢰인 후기</h2>
                  <p>[분야 · 세부 분야] 의뢰인 후기 제목 입니다.</p>
                </div>
                // <label className={`${styles.switch} no-drag`}>
                //   <input type="checkbox" />
                //   <span className={styles.slider}></span>
                // </label>
              )}
              {item.i === "subscribe" && (
                <div>
                  <h2>Q&A 라운지</h2>
                  <p>
                    소송이 처음이라 걱정되시죠?
                    <br />
                    분야별 변호사가 정확하게 답변해드립니다.
                  </p>
                  <a className={`${styles.arrow} no-drag`}>
                    <Image alt="" src={arrowIcon} />
                  </a>
                </div>
              )}
              {item.i === "counsel" && (
                <div>
                  <h2>카카오톡 상담</h2>
                  <p>지금 신청하기</p>
                  <a className={`${styles.arrow} no-drag`}>
                    <Image alt="" src={arrowIcon} />
                  </a>
                </div>
              )}
              {item.i === "qna" && (
                <div>
                  <h2>365일 1:1 상담</h2>
                  <p>지금 신청하기</p>
                  <a className={`${styles.arrow} no-drag`}>
                    <Image alt="" src={arrowIcon} />
                  </a>
                </div>
              )}

              {item.i === "broad" && (
                <div>
                  <h2>언론보도</h2>
                  <a className={`${styles.arrow} no-drag`}>
                    <Image alt="" src={arrowIcon} />
                  </a>
                </div>
              )}

              {item.i === "youtube" && (
                <div>
                  <h2>Youtube</h2>
                  <a className={`${styles.arrow} no-drag`}>
                    <Image alt="" src={arrowIcon} />
                  </a>
                </div>
              )}

              {item.i === "news" && (
                <>
                  <h2>소식과 자료</h2>
                  <span>
                    [언론보도] 게시글 제목 입니다. 게시글 제목 입니다. 게시글
                    제목입니다. 게시글 제목 입니다. 게시글 제목 입니다
                  </span>
                </>
              )}
            </div>
          ))}
        </GridLayout>
      </div>
    </div>
  );
};

export default Dashboard;
