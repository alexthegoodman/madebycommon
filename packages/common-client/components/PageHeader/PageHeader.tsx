"use client";

import * as React from "react";

import styles from "./PageHeader.module.scss";

import { PageHeaderProps } from "./PageHeader.d";

import { Noto_Sans } from "@next/font/google";
import Link from "next/link";
import { List, ArrowSquareOut } from "phosphor-react";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400"],
});

const PageHeader: React.FC<PageHeaderProps> = () => {
  const [showMenu1, setShowMenu1] = React.useState(false);
  const [showMobile, setShowMobile] = React.useState(false);

  return (
    <header
      className={`${styles.header} ${
        showMobile ? styles.showMobile : styles.hideMobile
      }`}
    >
      <div className={styles.mobileButtonContainer}>
        <a href="#!" onClick={() => setShowMobile(!showMobile)}>
          <List weight="thin" />
        </a>
      </div>
      <div className={styles.innerHeader}>
        <div className={styles.left}>
          <div className={styles.brandContainer}>
            <div className={styles.brand}>
              <Link href="/">Common</Link>
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a href="" className={notoSans.className}>
                  Try CommonText <ArrowSquareOut weight="thin" />
                </a>
              </li>

              {/* <li
                onMouseEnter={() => setShowMenu1(true)}
                onMouseLeave={() => setShowMenu1(false)}
              >
                <span className={notoSans.className}>About</span>
                <ul
                  className={`${styles.subList} ${
                    showMenu1 ? styles.openList : styles.closedList
                  }`}
                >
                  <li>
                    <Link href="/blog" className={notoSans.className}>
                      Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className={notoSans.className}>
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className={notoSans.className}>
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className={notoSans.className}>
                      Poverty
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li>
                <Link href="/blog" className={notoSans.className}>
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.right}>
          <ul className={styles.socialList}>
            <li>
              <a href="" target="_blank">
                <img src="/svg/facebook.svg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/svg/twitter.svg" />
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <img src="/svg/linkedin.svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.mobileHeader}>
        <div className={styles.mobileHeaderInner}>
          <div className={styles.brandContainer}>
            <h1 className={styles.brand}>
              <Link href="/">Common</Link>
            </h1>
          </div>
          <div className={styles.buttonContainer}>
            <a href="#!" onClick={() => setShowMobile(!showMobile)}>
              <List weight="thin" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
