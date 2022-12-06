import * as React from "react";

import styles from "./HomeGrid.module.scss";

import { HomeGridProps } from "./HomeGrid.d";
import Link from "next/link";

const HomeGrid: React.FC<HomeGridProps> = () => {
  return (
    <section className={styles.homeGrid}>
      <div className={styles.homeGridInner}>
        <div className={styles.left}>
          <a
            href="https://streamdoc.app"
            target="_blank"
            className={styles.gridItem}
          >
            <div className={styles.itemContent}>
              <span>CommonText</span>
              <p>Google-Compliant Writing Assistant</p>
            </div>
            <div className={styles.icon}>
              <img src="/svg/bigLink.svg" />
            </div>
          </a>
        </div>
        <div className={styles.right}>
          <Link href="/blog" className={styles.gridItem}>
            <span>10 Ways to be Active in Poetry</span>
            <div className={styles.icon}>
              <img src="/svg/arrowRight.svg" />
            </div>
          </Link>
          <Link href="/blog" className={styles.gridItem}>
            <span>Promoting Your Book with Libraries</span>
            <div className={styles.icon}>
              <img src="/svg/arrowRight.svg" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGrid;
