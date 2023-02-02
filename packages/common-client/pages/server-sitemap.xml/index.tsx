// pages/server-sitemap.xml/index.tsx

import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import request from "graphql-request";
import { graphqlUrl } from "../../defs/urls";
import { getPostSlugsQuery } from "../../graphql/queries/posts";

const getData = async () => {
  const data = await request(graphqlUrl, getPostSlugsQuery);
  return data;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlData = await getData();

  // console.info("urlData", urlData.Posts.docs);

  const fields = urlData.Posts.docs.map((doc, i) => {
    return {
      loc: "https://madebycommon.com/blog/post/" + doc.slug, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    };
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
