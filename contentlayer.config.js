import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc?._raw.flattenedPath?.split("/")?.slice(1)?.join("/") || "",
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    id: {
      type: "number",
      required: true,
    },
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    instructions: {
      type: "mdx",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    language: {
      type: "string",
      required: true,
    },
    initialCode: {
      type: "string",
      required: true,
    },
    checkTests: {
      type: "list",
      of: { type: "json" },
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post],
});
