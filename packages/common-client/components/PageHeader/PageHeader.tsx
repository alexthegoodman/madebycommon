import * as React from "react";

import styles from "./PageHeader.module.scss";

import { PageHeaderProps } from "./PageHeader.d";

import { Noto_Sans } from "@next/font/google";

const notoSans = Noto_Sans({ weight: ["100", "300", "400"] });

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.innerHeader}>
        <div className={styles.left}>
          <div className={styles.brandContainer}>
            <h1 className={styles.brand}>Common</h1>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <a href="" className={notoSans.className}>
                  Try StreamDoc <img src="/svg/bigLink.svg" />
                </a>
              </li>
              <li>
                <a href="" className={notoSans.className}>
                  Blog
                </a>
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
    </header>
  );
};

export default PageHeader;
