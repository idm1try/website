interface Post {
  slug: string;
  title: string;
  date: string;
  cover: string;
  excerpt: string;
  tags: string[];
  content: string;
  time: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
  headings: [
    {
      level: string | number;
      text: string;
      id: string;
    }
  ];
}

export default Post;
