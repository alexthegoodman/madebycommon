import * as React from "react";

import styles from "./HomeGrid.module.scss";

import { HomeGridProps } from "./HomeGrid.d";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Icon/Icon";

const HomeGrid = ({ posts }: HomeGridProps) => {
  return (
    <section className={styles.homeGrid}>
      <div className={styles.homeGridInner}>
        <div className={styles.left}>
          <a
            href="https://streamdoc.app"
            target="_blank"
            className={styles.gridItem}
          >
            <Image
              className={styles.backImage}
              src="/images/tempCommonText2.jpg"
              alt="CommonText app"
              width={700}
              height={400}
            />
            <div className={styles.itemContent}>
              <span>CommonText</span>
              <p>Get Relevant Information As You Type</p>
            </div>
            <div className={styles.icon}>
              {/* <img src="/svg/bigLink.svg" /> */}
              <Icon name="ArrowSquareOut" />
            </div>
          </a>
        </div>
        <div className={styles.right}>
          {posts.Posts.docs.map((doc, i) => {
            return (
              <Link
                key={`homeGrid${i}`}
                href={`/blog/post/${doc.slug}`}
                className={styles.gridItem}
                style={{
                  backgroundImage: `url("${doc.meta.image?.sizes?.tallThumbnail?.url}")`,
                }}
              >
                <div className={styles.itemContent}>
                  <span>{doc.title}</span>
                </div>
                <div className={styles.icon}>
                  {/* <img src="/svg/arrowRight.svg" /> */}
                  <Icon name="ArrowCircleRight" />
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
