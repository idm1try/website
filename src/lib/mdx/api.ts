import fs from 'fs/promises';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { remark } from 'remark';
import html from 'remark-html';

type Items = {
  [key: string]: string;
};

const firstFourLines = (file: any): any => {
  file.excerpt = file.content
    .split('\n')
    .filter((item: string) => item.length)
    .slice(0, 2)
    .join(' ');
};

const postsDirectory = join(process.cwd(), 'src', 'posts');

export async function getPostSlugs() {
  return fs.readdir(postsDirectory);
}

const getMarkdownFile = async (filePath: string) => {
  const files = await fs.readdir(filePath);
  return files.filter(file => file.match(new RegExp(`.*\\.md`, 'ig')))[0];
};

const excerptToHtml = async (excerpt: string) => {
  const e1 = await remark().use(html).process(excerpt);
  return e1.toString();
};

export async function getPostBySlug(slug: string, fields: string[] = []) {
  const items: Items = {};
  const filePath = await getMarkdownFile(join(postsDirectory, slug));
  const fileContents = await fs.readFile(join(postsDirectory, slug, filePath), 'utf8');
  const { data, excerpt, content } = matter(fileContents, {
    excerpt: firstFourLines,
  });

  data.time = readingTime(fileContents);

  if (excerpt) {
    const htmlExcerpt = await excerptToHtml(excerpt);
    data.excerpt = htmlExcerpt.replace(/\\<h[1-4]\/?>/, '');
  }

  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export async function getAllPosts(fields: string[] = []) {
  const slugs = await getPostSlugs();
  let posts = await Promise.all(slugs.map(async slug => getPostBySlug(slug, fields)));
  posts = posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}