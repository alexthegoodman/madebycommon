import * as React from "react";

import styles from "./HomeGrid.module.scss";

import { HomeGridProps } from "./HomeGrid.d";

const HomeGrid: React.FC<HomeGridProps> = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <span>StreamDoc</span>
            <span>Google-Compliant Writing Assistant</span>
            <div>
              <img />
            </div>
          </div>
        </div>
        <div>
          <div>
            <span>10 Ways to be Active in Poetry</span>
            <div>
              <img />
            </div>
          </div>
          <div>
            <span>Promoting Your Book with Libraries</span>
            <div>
              <img />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeGrid;
