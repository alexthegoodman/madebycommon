import { buildConfig } from "payload/config";
import path from "path";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Tags from "./collections/Tags";
import Users from "./collections/Users";
import Media from "./collections/Media";
import seo from "@payloadcms/plugin-seo";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import s3Adapter from "./adapters/S3";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Posts, Tags, Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    seo({
      collections: ["posts"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `${doc.title.value} - MadeByCommon.com`,
      generateDescription: ({ doc }) => doc.excerpt,
    }),
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter, // see docs for the adapter you want to use
        },
      },
    }),
  ],
});
