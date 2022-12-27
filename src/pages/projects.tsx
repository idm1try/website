import projectData from '@/data/projects.json'
import Head from 'next/head'
import Link from 'next/link'

interface ProjectProps {
  name: string
  url: string
  desc: string
}

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
      <meta
        property='og:image'
        content='https://idm1try.ru/api/og?heading=Projects'
      />
      <meta
        name='twitter:image'
        content='https://idm1try.ru/api/og?heading=Projects'
      />
    </Head>
    <h1 className='mb-7 animate-in text-4xl font-bold'>Projects</h1>
    <ul
      className='animated-list animate-in'
      style={{ '--index': 1 } as React.CSSProperties}
    >
      {projects.map((project: ProjectProps) => (
        <li key={project.name} className='transition-all duration-300'>
          <Link
            href={project.url}
            className='flex flex-col gap-1 py-3 md:flex-row md:gap-9'
          >
            <span className='font-medium md:w-28'>{project.name}</span>
            <span className='text-neutral-600 dark:text-neutral-400'>
              {project.desc}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

export default Projects
