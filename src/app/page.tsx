import Time from '@/components/time'
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

const Home = () => (
  <section>
    <h1 className='mb-5 text-4xl font-bold'>idm1try</h1>
    <Time />
    <div className='space-y-5'>
      <p>Hi there! I&apos;m Dmitry, a frontend developer</p>
      <p>Interested in TypeScript and React</p>
      <p>I&apos;m passionate about minimalism and simplicity</p>
      <p>Yes, neovim user</p>
    </div>
    <div className='mt-16'>
      <h1 className='mb-5 text-2xl font-bold'>Projects</h1>
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
    </div>
  </section>
)

export default Home
