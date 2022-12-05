import * as React from "react";

import styles from "./HomeCTA.module.scss";

import { HomeCTAProps } from "./HomeCTA.d";

const HomeCTA: React.FC<HomeCTAProps> = () => {
  return (
    <section className={styles.homeCTA}>
      <div className={styles.homeCTAInner}>
        <h3 className={styles.headline1}>Let's Do Business</h3>
        <p>
          At Common, innovating is the primary focus. Let's start a strategic
          partnership which positions us both for growth.
        </p>
        <a
          href="mailto:alex@madebycommon.com"
          target="_blank"
          className={styles.btn}
        >
          Reach Out
        </a>
      </div>
    </section>
  );
};

export default HomeCTA;
