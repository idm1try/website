import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: doc => `/${doc._raw.flattenedPath}`,
  },
};

const Blogs = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedDate: { type: 'string', required: true },
    author: { type: 'string', required: true },
    description: { type: 'string' },
    thumbnail: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: doc => ({
        publishedDate: {
          raw: doc.publishedDate,
          text: new Date(doc.publishedDate).toDateString(),
        },
        thumbnail: {
          raw: doc.thumbnail,
          url: doc.thumbnail?.replace(/^\/posts/, 'https://idm1try-blog.vercel.app/posts'),
        },
        author: doc.author,
        title: doc.title,
        description: doc.description,
        slug: `/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));

const Konovalov = defineDocumentType(() => ({
  name: 'Konovalov',
  filePathPattern: 'konovalov/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    publishedDate: { type: 'string', required: true },
    author: { type: 'string', required: true },
    thumbnail: { type: 'string' },
  },
  computedFields: {
    ...computedFields,
    frontMatter: {
      type: 'json',
      resolve: doc => ({
        publishedDate: {
          raw: doc.publishedDate,
          text: new Date(doc.publishedDate).toDateString(),
        },
        thumbnail: {
          raw: doc.thumbnail,
          url: doc.thumbnail?.replace(/^\/posts/, 'https://idm1try-blog.vercel.app/posts'),
        },
        author: doc.author,
        title: doc.title,
        description: doc.description,
        slug: `/${doc._raw.flattenedPath}`,
      }),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blogs, Konovalov],
  mdx: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkGfm, remarkEmoji],
  },
});

export default contentLayerConfig;
