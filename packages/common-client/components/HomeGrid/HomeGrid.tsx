import * as React from "react";

import styles from "./HomeGrid.module.scss";

import { HomeGridProps } from "./HomeGrid.d";

const HomeGrid: React.FC<HomeGridProps> = () => {
  return (
    <section className={styles.homeGrid}>
      <div className={styles.homeGridInner}>
        <div className={styles.left}>
          <div className={styles.gridItem}>
            <span>StreamDoc</span>
            <p>Google-Compliant Writing Assistant</p>
            <div className={styles.icon}>
              <img src="/svg/bigLink.svg" />
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.gridItem}>
            <span>10 Ways to be Active in Poetry</span>
            <div className={styles.icon}>
              <img src="/svg/arrowRight.svg" />
            </div>
          </div>
          <div className={styles.gridItem}>
            <span>Promoting Your Book with Libraries</span>
            <div className={styles.icon}>
              <img src="/svg/arrowRight.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGrid;
