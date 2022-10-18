import { MDXComponents } from 'components/mdxComponents';
import { allBlogs } from 'contentlayer/generated';
import BlogLayout from 'layouts/Blog';
import { getMember } from 'lib/getAllMembers';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';

const Page = ({ blog }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const Component = useMDXComponent(blog.body.code);

  return (
    <BlogLayout frontmatter={blog.frontMatter}>
      <Component components={MDXComponents} />
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = allBlogs
    .map(t => t._id.replace('blog/', '').replace('.mdx', '').replace('index', ''))
    .map(id => ({ params: { slug: [id.replace('blog/', '')] } }));

  return { paths: blogs, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const param = Array.isArray(params.slug) ? params.slug : [params.slug];

  const blog = allBlogs.find(blog => blog._id.includes(param.join('/')));
  const authorData = getMember(blog.frontMatter.author);
  blog.frontMatter.authorData = authorData;

  return { props: { blog } };
};

export default Page;
