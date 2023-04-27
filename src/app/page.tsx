import Time from '@/components/time'

const Home = () => (
  <section>
    <h1 className='mb-5 text-4xl font-bold text-mauve font-pacifico'>Hey, I'm idm1try</h1>
    <Time />

    <div className='space-y-5'>
      <div className='space-x-3'>
        <a className='underlined' href='https://github.com/idm1try'>GitHub</a>
        <a className='underlined' href='https://mastodon.social/@idm1try' rel='me'>Mastodon</a>
        <a className='underlined' href='https://discordapp.com/users/1053970394215874582'>Discord</a>
        <a className='underlined' href='mailto:idm1try@icloud.com'>Mail</a>
      </div>
      <p>
        My <a href='https://github.com/idm1try/dotfiles' className='underlined'>dotfiles</a> using Nix with Neovim
      </p>
      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5 text-mauve'>Interests</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-mauve'>
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
        <h2 className='font-bold text-xl mb-5 text-mauve'>Tech</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-mauve'>
          <li className='text-blue'>TypeScript</li>
          <li className='text-sapphire'>TailwindCSS</li>
          <li className='text-pink'>Next.js</li>
        </ul>
      </div>

      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5 text-mauve'>Projects</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-mauve'>
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

export default Home
