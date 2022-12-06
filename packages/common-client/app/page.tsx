import Image from "next/image";
import HomeCTA from "../components/HomeCTA/HomeCTA";
import HomeGrid from "../components/HomeGrid/HomeGrid";
import HomeHero from "../components/HomeHero/HomeHero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeGrid />
      <div className={styles.divider}></div>
      <HomeCTA
        headline="Let's Do Business"
        description="At Common, innovating is the primary focus. Let's start a strategic
          partnership which positions us both for growth."
        link="mailto:alex@madebycommon.com"
      />
    </main>
  );
}
