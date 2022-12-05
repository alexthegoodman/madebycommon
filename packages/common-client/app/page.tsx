import Image from "next/image";
import HomeCTA from "../components/HomeCTA/HomeCTA";
import HomeGrid from "../components/HomeGrid/HomeGrid";
import HomeHero from "../components/HomeHero/HomeHero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeGrid />
      <div className={styles.divider}></div>
      <HomeCTA />
    </main>
  );
}
