"use client";

import * as React from "react";

import styles from "./AboutAuthor.module.scss";

import { AboutAuthorProps } from "./AboutAuthor.d";
import Image from "next/image";
import { TwitterLogo, LinkedinLogo, FacebookLogo } from "phosphor-react";

const AboutAuthor: React.FC<AboutAuthorProps> = () => {
  return (
    <section className={styles.aboutAuthor}>
      <div className={styles.aboutAuthorInner}>
        <div className={styles.left}>
          <Image
            src="/images/new-gold-sm.jpg"
            alt="Alex Goodman - AlexTheGoodman"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.right}>
          <span className={styles.name}>Alex Goodman</span>
          <span className={styles.titles}>Founder, Engineer, Author</span>
          <p>
            Alex is the founder of Common and author of 3 books, including the
            most recent book "Our Virtue" (a collection of poems). He has been
            writing for nearly 15 years, whether that be books, blogs, or songs.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://twitter.com/AlexTheGoodman" target="_blank">
              <TwitterLogo /> <span>Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alexthegoodman/"
              target="_blank"
            >
              <LinkedinLogo /> <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
