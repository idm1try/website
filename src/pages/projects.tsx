import ProjectCard from '@/components/project-card'
import projectData from '@/data/projects.json'
import cn from '@/lib/classNames'
import { Project as ProjectProps } from '@/lib/project'
import Head from 'next/head'
import { useState } from 'react'

export const getStaticProps = () => {
  return {
    props: {
      projects: projectData,
    },
  }
}

const Projects = ({ projects }: { projects: ProjectProps[] }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredProjects = projects.filter(project => {
    const searchContent = project.name + project.desc + project.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (
    <div>
      <Head>
        <title>projects | idm1try</title>
        <meta property='og:title' content='projects | idm1try' />
        <meta name='twitter:title' content='projects | idm1try' />
      </Head>
      <h1 className='mb-12 animate-fade_in_up_10 text-6xl font-bold tracking-tight'>
        projects.
      </h1>
      <input
        onChange={e => setSearchValue(e.target.value)}
        placeholder='Search projects'
        className={cn(
          'transition-all duration-300',
          'ring-offset-4 ring-offset-base-200',
          'py-2 px-4 outline-none ring-mauve-200',
          'mb-12 w-full rounded-lg bg-mantle-200',
          'placeholder:text-surface2-200 hover:ring-2',
          'focus:ring-2 dark:bg-mantle-100 dark:ring-mauve-100',
          'dark:ring-offset-base-100 dark:placeholder:text-surface2-100'
        )}
      />
      {filteredProjects.length ? (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project: any, index: number) => (
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
