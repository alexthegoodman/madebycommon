import request from "graphql-request";
import Image from "next/image";
import HomeCTA from "../components/HomeCTA/HomeCTA";
import HomeGrid from "../components/HomeGrid/HomeGrid";
import HomeHero from "../components/HomeHero/HomeHero";
import { getPostsPreviewQuery } from "../graphql/queries/posts";
import styles from "./page.module.scss";

const getPosts = () => {
  const data = request(
    "http://localhost:3000/api/graphql",
    getPostsPreviewQuery
  );

  return data;
};

const Home = async () => {
  const posts = await getPosts();

  console.info("posts", posts.Posts.docs);

  return (
    <main>
      <HomeHero />
      <HomeGrid posts={posts} />
      <div className={styles.divider}></div>
      <HomeCTA
        headline="Let's Do Business"
        description="At Common, innovating is the primary focus. Let's start a strategic
          partnership which positions us both for growth."
        link="mailto:alex@madebycommon.com"
      />
    </main>
  );
};

export default Home;
