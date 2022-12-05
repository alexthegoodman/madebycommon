import * as React from "react";

import styles from "./PageHeader.module.scss";

import { PageHeaderProps } from "./PageHeader.d";

const PageHeader: React.FC<PageHeaderProps> = () => {
  return (
    <header>
      <div>
        <div>
          <div>
            <h1>Common</h1>
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
        <div>
          <ul>
            <li>
              <a>
                <img />
              </a>
            </li>
            <li>
              <a>
                <img />
              </a>
            </li>
            <li>
              <a>
                <img />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
