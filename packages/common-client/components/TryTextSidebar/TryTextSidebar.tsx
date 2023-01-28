import * as React from "react";

import styles from "./TryTextSidebar.module.scss";

import { TryTextSidebarProps } from "./TryTextSidebar.d";
import Image from "next/image";

const TryTextSidebar: React.FC<TryTextSidebarProps> = () => {
  return (
    <section className={styles.tryTextSidebar}>
      <div className={styles.tryTextSidebarInner}>
        <h5>Try DeepType</h5>
        <Image
          className={styles.featureImage}
          src="/images/tempCommonText2.jpg"
          alt="DeepType app"
          width={350}
          height={200}
        />
        <p>Surface Relevant Information As You Type</p>
        <a className={styles.btn} target="_blank" href="https://deeptype.app">
          Try Today
        </a>
      </div>
    </section>
  );
};

export default TryTextSidebar;
