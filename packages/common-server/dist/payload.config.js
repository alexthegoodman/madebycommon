"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var path_1 = __importDefault(require("path"));
var Categories_1 = __importDefault(require("./collections/Categories"));
var Posts_1 = __importDefault(require("./collections/Posts"));
var Tags_1 = __importDefault(require("./collections/Tags"));
var Users_1 = __importDefault(require("./collections/Users"));
var Media_1 = __importDefault(require("./collections/Media"));
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var plugin_cloud_storage_1 = require("@payloadcms/plugin-cloud-storage");
var S3_1 = __importDefault(require("./adapters/S3"));
exports.default = (0, config_1.buildConfig)({
    serverURL: "http://localhost:3000",
    admin: {
        user: Users_1.default.slug,
    },
    collections: [Categories_1.default, Posts_1.default, Tags_1.default, Users_1.default, Media_1.default],
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
    graphQL: {
        schemaOutputFile: path_1.default.resolve(__dirname, "generated-schema.graphql"),
    },
    cors: ["http://192.168.0.151:3000"],
    plugins: [
        (0, plugin_seo_1.default)({
            collections: ["posts"],
            uploadsCollection: "media",
            generateTitle: function (_a) {
                var doc = _a.doc;
                return "".concat(doc.title.value, " - MadeByCommon.com");
            },
            generateDescription: function (_a) {
                var doc = _a.doc;
                return doc.excerpt;
            },
        }),
        (0, plugin_cloud_storage_1.cloudStorage)({
            collections: {
                media: {
                    adapter: S3_1.default, // see docs for the adapter you want to use
                },
            },
        }),
    ],
});
