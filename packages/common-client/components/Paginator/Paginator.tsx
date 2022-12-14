"use client";

import * as React from "react";

import styles from "./Paginator.module.scss";

import { PaginatorProps } from "./Paginator.d";
import Link from "next/link";

const Paginator: React.FC<PaginatorProps> = ({ params }) => {
  const pageNum = params.pageNum ? parseInt(params.pageNum) : 1;

  return (
    <section className={styles.paginator}>
      <div className={styles.paginatorInner}>
        {pageNum - 1 > 0 ? (
          <Link href={`/blog/${pageNum - 1}`}>
            <span>{pageNum - 1}</span>
          </Link>
        ) : (
          <></>
        )}
        <Link className={styles.currentPage} href={`/blog/${pageNum}`}>
          <span>{pageNum}</span>
        </Link>
        <Link href={`/blog/${pageNum + 1}`}>
          <span>{pageNum + 1}</span>
        </Link>
      </div>
    </section>
  );
};

export default Paginator;
