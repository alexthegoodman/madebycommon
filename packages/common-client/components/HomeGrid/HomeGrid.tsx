import * as React from "react";

import styles from "./HomeGrid.module.scss";

import { HomeGridProps } from "./HomeGrid.d";
import Link from "next/link";
import request, { gql } from "graphql-request";

const getPosts = () => {
  const data = request(
    "http://localhost:3000/api/graphql",
    gql`
      query postsQuery {
        Posts(limit: 2) {
          page
          docs {
            title
            content
            slug
            meta {
              title
              description
              image {
                filename
                url
              }
            }
          }
        }
      }
    `
  );
  return data;
};

const HomeGrid = async () => {
  const posts = await getPosts();
  console.info("posts", posts, posts.Posts.docs);
  return (
    <section className={styles.homeGrid}>
      <div className={styles.homeGridInner}>
        <div className={styles.left}>
          <a
            href="https://streamdoc.app"
            target="_blank"
            className={styles.gridItem}
          >
            <div className={styles.itemContent}>
              <span>CommonText</span>
              <p>Google-Compliant Writing Assistant</p>
            </div>
            <div className={styles.icon}>
              <img src="/svg/bigLink.svg" />
            </div>
          </a>
        </div>
        <div className={styles.right}>
          {posts.Posts.docs.map((doc, i) => {
            return (
              <Link href={`/blog/${doc.slug}`} className={styles.gridItem}>
                <span>{doc.title}</span>
                <div className={styles.icon}>
                  <img src="/svg/arrowRight.svg" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeGrid;
