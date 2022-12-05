import * as React from "react";

import styles from "./HomeHero.module.scss";

import { HomeHeroProps } from "./HomeHero.d";
import Image from "next/image";

const HomeHero: React.FC<HomeHeroProps> = () => {
  return (
    <section>
      <div>
        <div>
          <h2>Creating products that inspire</h2>
        </div>
        <div>
          <Image src="" alt="Blush Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
