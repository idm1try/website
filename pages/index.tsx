import ArticleList from 'components/ArticleList';
import { allBlogs } from 'contentlayer/generated';
import Layout from 'layouts/Article';

const Home = () => (
  <Layout>
    <ArticleList data={allBlogs} />
  </Layout>
);

export default Home;
