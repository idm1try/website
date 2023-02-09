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

export const metadata = {
  title: 'Projects',
  twitter: {
    title: 'Projects',
    images: 'https://idm1try.ru/api/og?heading=Projects',
  },
  openGraph: {
    title: 'Projects',
    url: 'https://idm1try.ru/projects',
    images: 'https://idm1try.ru/api/og?heading=Projects',
  },
  alternates: {
    canonical: 'https://idm1try.ru/projects',
  },
}

const Projects = () => (
  <section>
    <ul className='animated-list'>
      {projectsData.map(project => (
        <li key={project.name} className='transition-all duration-300'>
          <Link
            href={project.url}
            className='-mx-3 flex flex-col gap-1 rounded-xl p-3 focus:bg-neutral-200/40 focus:outline-none dark:focus:bg-neutral-800/75 md:flex-row md:gap-9'
          >
            <span className='font-medium md:w-28'>{project.name}</span>
            <span className='text-neutral-600 dark:text-neutral-400'>
              {project.desc}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
)

export default Projects
