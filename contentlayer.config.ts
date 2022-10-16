import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';
import rehypeSlug from 'rehype-slug';
import remarkEmoji from 'remark-emoji';
import remarkGfm from 'remark-gfm';
import { getTableOfContents } from './lib/getTableOfContents';

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
    tags: { type: 'list', of: { type: 'string' } },
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
        tags: doc.tags,
        slug: `/${doc._raw.flattenedPath}`,
        headings: getTableOfContents(doc.body.raw),
        readingTime: readingTime(doc.body.raw, { wordsPerMinute: 300 }),
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
