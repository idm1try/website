import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import { getTableOfContents } from './lib/getTableOfContents';

const Blogs = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedDate: { type: 'string', required: true },
    author: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    description: { type: 'string' },
    image: { type: 'string' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: doc => `/${doc._raw.flattenedPath}`,
    },
    frontMatter: {
      type: 'json',
      resolve: blog => ({
        publishedDate: {
          raw: blog.publishedDate,
          iso: new Date(blog.publishedDate).toISOString(),
          text: new Date(blog.publishedDate).toDateString(),
        },
        headings: getTableOfContents(blog.body.raw),
        readingTime: readingTime(blog.body.raw, { wordsPerMinute: 300 }),
      }),
    },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blogs],
  mdx: {
    rehypePlugins: [rehypeSlug],
    remarkPlugins: [remarkGfm, remarkEmoji],
  },
});

export default contentLayerConfig;
