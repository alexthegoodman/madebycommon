import * as React from "react";

import styles from "./HomeHero.module.scss";

import { HomeHeroProps } from "./HomeHero.d";
import Image from "next/image";

const HomeHero: React.FC<HomeHeroProps> = () => {
  return (
    <section className={styles.homeHero}>
      <div className={styles.homeHeroInner}>
        <div className={styles.left}>
          <h1 className={styles.headline1}>Creating products that inspire</h1>
        </div>
        <div className={styles.right}>
          <Image
            src="/svg/undraw1.svg"
            width={550}
            height={600}
            alt="Blush Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
