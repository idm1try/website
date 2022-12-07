import ProjectCard from '@/components/project-card'
import Search from '@/components/search'
import TagCheckbox from '@/components/tag-checkbox'
import projectData from '@/data/projects.json'
import useSearch from '@/hooks/use-search'
import { Project as ProjectProps } from '@/lib/project'
import Head from 'next/head'

export const getStaticProps = () => {
  return {
    props: {
      projects: projectData,
    },
  }
}

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  const search = useSearch(projects)

  return (
    <div>
      <Head>
        <title>projects | idm1try</title>
        <meta property='og:title' content='projects | idm1try' />
        <meta name='twitter:title' content='projects | idm1try' />
      </Head>
      <h1 className='animate-fade_in_up_10 text-6xl font-bold tracking-tight'>
        projects.
      </h1>
      <div>
        <Search
          className='mt-12 mb-10'
          defaultValue={search.defaultValue}
          onChange={value => {
            search.setParams(value)
          }}
        />
        <div className='mb-6'>
          {search.tags.sort().map(tag => (
            <TagCheckbox
              key={tag}
              checked={search.filters.includes(tag)}
              value={tag}
              onChange={e =>
                e.target.checked ? search.addTag(tag) : search.removeTag(tag)
              }
            >
              {tag}
            </TagCheckbox>
          ))}
        </div>
      </div>
      {search.results.length ? (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {search.results.map((project: any, index: number) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className='my-12 text-center text-4xl font-bold'>
          No projects found
        </div>
      )}
    </div>
  )
}

export default Projects
