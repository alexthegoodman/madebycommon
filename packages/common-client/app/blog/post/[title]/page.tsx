import request from "graphql-request";
import Image from "next/image";
import TryTextArticle from "../../../../components/TryTextArticle/TryTextArticle";
import TryTextSidebar from "../../../../components/TryTextSidebar/TryTextSidebar";
import { getPostQuery } from "../../../../graphql/queries/posts";
import { serialize } from "../../../../helpers/serialize";
import styles from "./page.module.scss";

export const getPost = (slug) => {
  //   const data = fetch(
  //     `http://0.0.0.0:3000/api/posts?where[slug][equals]=${slug}`
  //   );
  const data = request("http://0.0.0.0:3000/api/graphql", getPostQuery, {
    slug,
  });
  return data;
};

const BlogPost = async ({ params }) => {
  const postData = await getPost(params.title);
  //   const postJson = await postData.json();
  const post = postData.Posts.docs[0];

  // console.info("post", post);

  return (
    <main>
      <section className={styles.articleHeader}>
        <div className={styles.articleHeaderInner}>
          {post.meta?.image?.sizes?.largeThumbnail?.url ? (
            <div className={styles.left}>
              <Image
                src={post.meta?.image?.sizes?.largeThumbnail?.url}
                alt={post.title}
                width={post.meta?.image?.sizes?.largeThumbnail?.width / 2}
                height={post.meta?.image?.sizes?.largeThumbnail?.height / 2}
              />
            </div>
          ) : (
            <></>
          )}

          <div className={styles.right}>
            {post.createdAt === post.updatedAt ? (
              <span className={styles.datePublished}>
                Published on {post.createdAt}
              </span>
            ) : (
              <span className={styles.datePublished}>
                Last Updated on {post.updatedAt}
              </span>
            )}

            <h1>{post.title}</h1>
            <span className={styles.author}>
              <em>Written by {post.author?.name}</em>
            </span>
            <p>{post.meta.description}</p>
          </div>
        </div>
      </section>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <aside className={styles.sidebar}>
            <TryTextSidebar />
          </aside>
          <article className={styles.articleBody}>
            {serialize(post.content)}
            <TryTextArticle />
          </article>
        </div>
      </section>
    </main>
  );
};

export default BlogPost;
