import Head from 'next/head'
import Link from 'next/link'

interface ProjectProps {
  name: string
  url: string
  desc: string
}

const projectsData: ProjectProps[] = [
  {
    name: 'idm1try.ru',
    url: '/',
    desc: 'The website you are looking at',
  },
  {
    name: 'Weather',
    url: 'https://weather.idm1try.ru',
    desc: 'Simple weather app, uses OpenWeatherMap API',
  },
  {
    name: 'IP info',
    url: 'https://ip.idm1try.ru',
    desc: 'IP info with detecting and search ip address',
  },
  {
    name: 'Snake',
    url: 'https://snake.idm1try.ru',
    desc: 'Browser snake game',
  },
]

const Projects = () => (
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
    <h1 className='mb-7 text-4xl font-bold'>Projects</h1>
    <ul className='animated-list'>
      {projectsData.map(project => (
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
