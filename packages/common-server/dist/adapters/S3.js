"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s3_1 = require("@payloadcms/plugin-cloud-storage/s3");
var s3 = (0, s3_1.s3Adapter)({
    config: {
        credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: process.env.S3_REGION,
    },
    bucket: process.env.S3_BUCKET,
});
exports.default = s3;
