import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    published: {
      type: 'boolean',
      required: false,
      default: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    subtitle: {
      type: 'string',
      required: false,
    },
    date: {
      type: 'date',
      required: true,
    },
    categories: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })