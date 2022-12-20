import request, { gql } from "graphql-request";
import Image from "next/image";
import BlogItem from "../../../components/BlogItem/BlogItem";
import HomeCTA from "../../../components/HomeCTA/HomeCTA";
import Paginator from "../../../components/Paginator/Paginator";
import { getPostsQuery } from "../../../graphql/queries/posts";
import styles from "../page.module.scss";

const getPosts = (pageNum) => {
  const data = request("http://0.0.0.0:3000/api/graphql", getPostsQuery, {
    page: parseInt(pageNum),
  });
  return data;
};

const Blog = async ({ params }) => {
  const { pageNum } = params;

  const posts = await getPosts(pageNum);

  console.info("posts", params, posts);

  return (
    <main>
      <HomeCTA
        headline={`Page ${pageNum}`}
        description="Welcome to the official blog, covering all topics related to our product offerings. Come back for regular articles."
      />
      <section className={styles.blogList}>
        <div className={styles.blogListInner}>
          {posts.Posts.docs.map((post, i) => {
            return <BlogItem key={`blogList${i}`} post={post} />;
          })}
        </div>
        <Paginator params={params} />
      </section>
    </main>
  );
};

export default Blog;
