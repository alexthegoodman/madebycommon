/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://madebycommon.com",
  generateRobotsTxt: true, // (optional)
  sitemapSize: 5000,
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://madebycommon.com/server-sitemap.xml", // <==== Add here
    ],
  },
  // ...other options
};

module.exports = config;
