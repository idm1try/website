import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import Search from '@/components/Search';
import TagCheckbox from '@/components/TagCheckbox';
import projectData from '@/data/projects.json';
import useSearch from '@/hooks/useSearch';
import { Projects } from '@/types/projects';
import Head from 'next/head';
import { TbSearch } from 'react-icons/tb';

const Projects = ({ projects }: Projects) => {
  const search = useSearch(projects);

  return (
    <Layout>
      <Head>
        <title>projects | idm1try</title>
        <meta property='og:title' content='projects | idm1try' />
        <meta name='twitter:title' content='projects | idm1try' />
      </Head>
      <h1 className='animate-fade_in_up_10 text-6xl font-bold tracking-tight'>projects.</h1>
      <div>
        <Search
          className='my-12'
          defaultValue={search.defaultValue}
          onChange={value => {
            search.setParams(value);
          }}
        />
        <div className='mb-12'>
          {search.tags.sort().map(tag => (
            <TagCheckbox
              key={tag}
              checked={search.filters.includes(tag)}
              value={tag}
              onChange={e => (e.target.checked ? search.addTag(tag) : search.removeTag(tag))}
            >
              {tag}
            </TagCheckbox>
          ))}
        </div>
      </div>
      {search?.results?.length !== 0 ? (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {search?.results?.map((project: any) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className='text-center line-clamp-2'>
          <TbSearch
            className='mx-auto animate-fade_in_up text-pink-200 dark:text-pink-100'
            size={80}
          />
          <div className='my-3 text-2xl font-bold'>No results</div>
        </div>
      )}
    </Layout>
  );
};

export default Projects;

export const getStaticProps = async () => {
  return {
    props: {
      projects: projectData,
    },
  };
};
