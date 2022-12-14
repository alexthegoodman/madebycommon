import * as React from "react";

import styles from "./BlogItem.module.scss";

import { BlogItemProps } from "./BlogItem.d";
import Image from "next/image";
import Link from "next/link";

const BlogItem: React.FC<BlogItemProps> = ({ post = null }) => {
  return (
    <Link href={`/blog/post/${post?.slug}`} className={styles.blogItem}>
      <div className={styles.blogItemInner}>
        <div className={styles.left}>
          {post.meta?.image?.sizes?.wideThumbnail?.url ? (
            <Image
              src={post.meta?.image?.sizes?.wideThumbnail?.url}
              alt={post.title}
              width="550"
              height="320"
            />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.right}>
          <span>Published on {post.createdAt}</span>
          <h5>{post.title}</h5>
          <span>Written by {post.author?.name}</span>
          <p>{post.meta.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
