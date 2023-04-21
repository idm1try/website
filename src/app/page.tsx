import Time from '@/components/time'

const Home = () => (
  <section>
    <h1 className='mb-5 text-4xl font-bold text-pink'>idm1try</h1>
    <Time />

    <div className='space-y-5'>
      <p>Hi there! I&apos;m Dmitry</p>
      <p>
        My <a href='https://github.com/idm1try/dotfiles' className='underlined'>dotfiles</a> using Nix with Neovim
      </p>
      <ul className='space-y-2'>
        <li>
          <GitHubIcon />
          <a className='underlined' href='https://github.com/idm1try'>idm1try</a>
        </li>
        <li>
          <MastodonIcon />
          <a className='underlined' href='https://mastodon.social/@idm1try'>@idm1try@mastodon.social</a>
        </li>
        <li>
          <DiscordIcon />
          <a className='underlined' href='https://discordapp.com/users/1053970394215874582'>idm1try#2173</a>
        </li>
        <li>
          <MailIcon />
          <a className='underlined' href='mailto:idm1try@icloud.com'>idm1try@icloud.com</a>
        </li>
      </ul>

      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5 text-pink'>Interests</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-pink'>
          <li>
            <span className='text-sapphire'>Terminal</span>
            <span className='mx-2 text-overlay0'>-</span>
            <span className='text-overlay0'>My workflow all with terminal</span>
          </li>
          <li>
            <span className='text-green'>Neovim</span>
            <span className='mx-2 text-overlay0'>-</span>
            <span className='text-overlay0'>My main and favotire text editor</span>
          </li>
          <li>
            <span className='text-blue'>Nix</span>
            <span className='mx-2 text-overlay0'>-</span>
            <span className='text-overlay0'>Package/System managment</span>
          </li>
        </ul>
      </div>

      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5 text-pink'>Tech</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-pink'>
          <li className='text-blue'>TypeScript</li>
          <li className='text-sapphire'>TailwindCSS</li>
          <li className='text-mauve'>Next.js</li>
        </ul>
      </div>

      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5 text-pink'>Projects</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-pink'>
          <li>
            <a href='https://ip.idm1try.ru' className='underlined'>IP Info</a>
            <span className='mx-2 text-overlay0'>-</span>
            <span className='text-overlay0'>
              IP address information website uses <a href='https://ipinfo.io'>ipinfo.io API</a>
            </span>
          </li>
          <li>
            <a href='https://weather.idm1try.ru' className='underlined'>Weather</a>
            <span className='mx-2 text-overlay0'>-</span>
            <span className='text-overlay0'>
              Weather website uses <a href='https://openweathermap.org'>OpenWeatherMap API</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

const MastodonIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block text-pink mr-2'
    width={20}
    height={20}
    viewBox='0 0 24 24'
    strokeWidth='2'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M18.648 15.254c-1.816 1.763 -6.648 1.626 -6.648 1.626a18.262 18.262 0 0 1 -3.288 -.256c1.127 1.985 4.12 2.81 8.982 2.475c-1.945 2.013 -13.598 5.257 -13.668 -7.636l-.026 -1.154c0 -3.036 .023 -4.115 1.352 -5.633c1.671 -1.91 6.648 -1.666 6.648 -1.666s4.977 -.243 6.648 1.667c1.329 1.518 1.352 2.597 1.352 5.633s-.456 4.074 -1.352 4.944z'>
    </path>
    <path d='M12 11.204v-2.926c0 -1.258 -.895 -2.278 -2 -2.278s-2 1.02 -2 2.278v4.722m4 -4.722c0 -1.258 .895 -2.278 2 -2.278s2 1.02 2 2.278v4.722'>
    </path>
  </svg>
)

const GitHubIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block mr-2 text-pink'
    width={20}
    height={20}
    viewBox='0 0 24 24'
    stroke-width={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'>
    </path>
  </svg>
)

const DiscordIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block mr-2 text-pink'
    width={20}
    height={20}
    viewBox='0 0 24 24'
    stroke-width={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0'></path>
    <path d='M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0'></path>
    <path d='M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l.975 1.923a11.913 11.913 0 0 1 4.053 0l.972 -1.923c1.5 .16 3.043 .485 4.5 1.5c2 5.667 2.167 9.833 1.5 11.5c-.667 1.333 -2 3 -3.5 3c-.5 0 -2 -2 -2 -3'>
    </path>
    <path d='M7 16.5c3.5 1 6.5 1 10 0'></path>
  </svg>
)

const MailIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block mr-2 text-pink'
    width={20}
    height={20}
    viewBox='0 0 24 24'
    stroke-width={2}
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
    <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
    <path d='M3 7l9 6l9 -6'></path>
  </svg>
)

export default Home
