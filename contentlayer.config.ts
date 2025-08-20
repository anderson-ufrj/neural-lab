import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: `**/services/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the service',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the service',
      required: true,
    },
    order: {
      type: 'number',
      description: 'The order of the service',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    locale: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir.split('/')[0],
    },
  },
}));

export const Case = defineDocumentType(() => ({
  name: 'Case',
  filePathPattern: `**/cases/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the case',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the case',
      required: true,
    },
    link: {
      type: 'string',
      description: 'External link for the case',
      required: false,
    },
    tech: {
      type: 'list',
      of: { type: 'string' },
      description: 'Technologies used',
      required: false,
    },
    order: {
      type: 'number',
      description: 'The order of the case',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    locale: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir.split('/')[0],
    },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    published: {
      type: 'boolean',
      description: 'Whether the post is published',
      required: false,
      default: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    locale: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileDir.split('/')[0],
    },
  },
}));

export default makeSource({
  contentDirPath: './src/content',
  documentTypes: [Service, Case, Post],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});