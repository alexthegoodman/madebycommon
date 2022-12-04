import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";

const s3 = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  },
  bucket: process.env.S3_BUCKET,
});

export default s3;
