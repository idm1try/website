import { MDXComponents } from 'components/mdxComponents';
import { allBlogs } from 'contentlayer/generated';
import BlogLayout from 'layouts/Blog';
import { getMember } from 'lib/getAllMembers';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

export default function Page({ blog }: InferGetStaticPropsType<typeof getStaticProps>) {
  const Component = useMDXComponent(blog.body.code);

  return (
    <BlogLayout frontmatter={blog.frontMatter}>
      <Component components={MDXComponents} />
    </BlogLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = allBlogs
    .map(t => t._id.replace('blog/', '').replace('.mdx', '').replace('index', ''))
    .map(id => ({ params: { slug: [id.replace('blog/', '')] } }));

  return { paths: blogs, fallback: false };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async (ctx: any) => {
  const params = Array.isArray(ctx.params.slug) ? ctx.params.slug : [ctx.params.slug];

  const blog = allBlogs.find(blog => blog._id.includes(params.join('/')));
  const authorData = getMember(blog.frontMatter.author);
  blog.frontMatter.authorData = authorData;

  return { props: { blog } };
};
