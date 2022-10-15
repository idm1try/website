import { MDXComponents } from 'components/mdxComponents';
import { allKonovalovs } from 'contentlayer/generated';
import BlogLayout from 'layouts/Blog';
import { getMember } from 'lib/getAllMembers';
import { GetStaticPaths, InferGetStaticPropsType } from 'next';
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
  const blogs = allKonovalovs
    .map(t => t._id.replace('konovalov/', '').replace('.mdx', '').replace('index', ''))
    .map(id => ({ params: { slug: [id.replace('konovalov/', '')] } }));

  return { paths: blogs, fallback: false };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps = async (ctx: any) => {
  const params = Array.isArray(ctx.params.slug) ? ctx.params.slug : [ctx.params.slug];

  const blog = allKonovalovs.find(blog => blog._id.includes(params.join('/')));
  const authorData = getMember(blog.frontMatter.author);

  blog.frontMatter.authorData = authorData;

  return { props: { blog } };
};

export default Page;
