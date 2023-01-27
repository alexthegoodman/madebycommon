"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Posts = {
    slug: "posts",
    admin: {
        defaultColumns: ["title", "author", "category", "tags", "status"],
        useAsTitle: "title",
    },
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "title",
            type: "text",
        },
        // {
        //   name: "featuredImage",
        //   type: "relationship",
        //   relationTo: "media",
        // },
        {
            name: "slug",
            type: "text",
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users",
            admin: {
                position: "sidebar",
            },
        },
        // {
        //   name: "publishedDate",
        //   type: "date",
        //   admin: {
        //     position: "sidebar",
        //   },
        // },
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "tags",
            type: "relationship",
            relationTo: "tags",
            hasMany: true,
            admin: {
                position: "sidebar",
            },
        },
        {
            name: "content",
            type: "richText",
        },
        {
            name: "status",
            type: "select",
            options: [
                {
                    value: "draft",
                    label: "Draft",
                },
                {
                    value: "published",
                    label: "Published",
                },
            ],
            defaultValue: "draft",
            admin: {
                position: "sidebar",
            },
        },
    ],
};
exports.default = Posts;
