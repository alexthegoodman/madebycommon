import request, { gql } from "graphql-request";
import Image from "next/image";
import BlogItem from "../../components/BlogItem/BlogItem";
import HomeCTA from "../../components/HomeCTA/HomeCTA";
import Paginator from "../../components/Paginator/Paginator";
import { getPostsQuery } from "../../graphql/queries/posts";
import styles from "./page.module.scss";

const getPosts = () => {
  const data = request("http://localhost:3000/api/graphql", getPostsQuery);
  return data;
};

const Blog = async () => {
  const posts = await getPosts();

  console.info("posts", posts);

  return (
    <main>
      <HomeCTA
        headline="Common Blog"
        description="Welcome to the official blog, covering all topics related to our product offerings. Come back for regular articles."
      />
      <section className={styles.blogList}>
        <div className={styles.blogListInner}>
          {posts.Posts.docs.map((post, i) => {
            return <BlogItem post={post} />;
          })}
        </div>
        <Paginator />
      </section>
    </main>
  );
};

export default Blog;
