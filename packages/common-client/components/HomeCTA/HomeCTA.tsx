import * as React from "react";

import styles from "./HomeCTA.module.scss";

import { HomeCTAProps } from "./HomeCTA.d";

const HomeCTA: React.FC<HomeCTAProps> = ({
  headline = "",
  description = "",
  link = "",
}) => {
  return (
    <section className={styles.homeCTA}>
      <div className={styles.homeCTAInner}>
        <h3 className={styles.headline1}>{headline}</h3>
        <p>{description}</p>
        {link !== "" ? (
          <a
            href="mailto:alex@madebycommon.com"
            target="_blank"
            className={styles.btn}
          >
            Reach Out
          </a>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default HomeCTA;
