import ProjectCard from '@/components/project-card'
import projectData from '@/data/projects.json'
import { Project as ProjectProps } from '@/lib/project'
import Head from 'next/head'

export const getStaticProps = () => {
  return {
    props: {
      projects: projectData,
    },
  }
}

const Projects = ({ projects }: { projects: ProjectProps[] }) => (
  <div>
    <Head>
      <title>projects | idm1try</title>
      <meta property='og:title' content='projects | idm1try' />
      <meta name='twitter:title' content='projects | idm1try' />
    </Head>
    <h1 className='mb-12 animate-fade_in_up_10 text-6xl font-bold tracking-tight'>
      projects.
    </h1>
    {projects.length ? (
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project: any, index: number) => (
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

export default Projects
