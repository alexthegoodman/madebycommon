import * as React from "react";

import styles from "./PageFooter.module.scss";

import { PageFooterProps } from "./PageFooter.d";

const PageFooter: React.FC<PageFooterProps> = () => {
  return (
    <footer>
      <div>
        <div>
          <span>Common</span>
          <span>Common © 2023</span>
        </div>
        <div>
          <ul>
            <li>
              <a>Try StreamDoc</a>
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
