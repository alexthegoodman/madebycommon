import * as React from "react";

import styles from "./TryTextArticle.module.scss";

import { TryTextArticleProps } from "./TryTextArticle.d";

const TryTextArticle: React.FC<TryTextArticleProps> = () => {
  return (
    <section className={styles.tryTextArticle}>
      <div className={styles.tryTextArticleInner}>
        <h5 className={styles.headline}>Try CommonText</h5>
        <p className={styles.copy}>Surface Relevant Information As You Type</p>
        <a className={styles.btn} target="_blank" href="https://commontext.app">
          Try Free
        </a>
      </div>
    </section>
  );
};

export default TryTextArticle;
