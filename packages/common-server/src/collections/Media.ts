import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [],
  upload: {
    staticURL: "/media",
    staticDir: "media",
    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 400,
        position: "centre",
      },
      {
        name: "wideThumbnail",
        width: 800,
        height: 500,
        position: "centre",
      },
      {
        name: "tallThumbnail",
        width: 440,
        height: 600,
        position: "centre",
      },
      {
        name: "largeThumbnail",
        width: 1000,
        height: null,
        position: "centre",
        fit: "contain",
      },
    ],
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*"],
  },
};

export default Media;
