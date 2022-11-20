import fs from 'fs/promises';
import path from 'path';

export const POSTS_PATH = path.join(process.cwd(), 'src', 'posts');

export const postFilePaths = async () => {
  return fs.readdir(POSTS_PATH);
};
