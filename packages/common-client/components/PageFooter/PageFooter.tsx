import * as React from "react";

import styles from "./PageFooter.module.scss";

import { PageFooterProps } from "./PageFooter.d";

const PageFooter: React.FC<PageFooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.left}>
          <h5 className={styles.brand}>Common</h5>
          <span className={styles.copyright}>Common © 2023</span>
        </div>
        <div className={styles.right}>
          <ul>
            <li>
              <a>Try StreamDox</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
