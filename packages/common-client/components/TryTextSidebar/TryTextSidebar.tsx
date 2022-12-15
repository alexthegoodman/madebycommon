import * as React from "react";

import styles from "./TryTextSidebar.module.scss";

import { TryTextSidebarProps } from "./TryTextSidebar.d";
import Image from "next/image";

const TryTextSidebar: React.FC<TryTextSidebarProps> = () => {
  return (
    <section className={styles.tryTextSidebar}>
      <div className={styles.tryTextSidebarInner}>
        <h5>Try CommonText</h5>
        <Image
          className={styles.featureImage}
          src="/images/tempCommonText2.jpg"
          alt="CommonText app"
          width={350}
          height={200}
        />
        <p>Surface Relevant Information As You Type</p>
        <a className={styles.btn} target="_blank" href="https://commontext.app">
          Try Free
        </a>
      </div>
    </section>
  );
};

export default TryTextSidebar;
