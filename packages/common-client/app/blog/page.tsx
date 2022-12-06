import Image from "next/image";
import BlogItem from "../../components/BlogItem/BlogItem";
import HomeCTA from "../../components/HomeCTA/HomeCTA";
import Paginator from "../../components/Paginator/Paginator";
import styles from "./page.module.scss";

export default function Blog() {
  return (
    <main>
      <HomeCTA
        headline="Common Blog"
        description="Welcome to the official blog, covering all topics related to our product offerings. Come back for regular articles."
      />
      <section className={styles.blogList}>
        <div className={styles.blogListInner}>
          <BlogItem />
        </div>
        <Paginator />
      </section>
    </main>
  );
}
