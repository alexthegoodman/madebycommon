import * as React from "react";

import styles from "./BlogItem.module.scss";

import { BlogItemProps } from "./BlogItem.d";
import Image from "next/image";
import Link from "next/link";

const BlogItem: React.FC<BlogItemProps> = ({ post = null }) => {
  return (
    <Link href={`/blog/post/${post.slug}`} className={styles.blogItem}>
      <div className={styles.blogItemInner}>
        <div className={styles.left}>
          <Image src="" alt={""} width="550" height="320" />
        </div>
        <div className={styles.right}>
          <span></span>
          <h5></h5>
          <span></span>
          <p></p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
