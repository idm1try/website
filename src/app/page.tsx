import Time from '@/components/time'

const Home = () => (
  <section>
    <h1 className='mb-5 text-4xl font-bold'>Hey, I'm Dmitry</h1>
    <Time />

    <div className='space-y-5'>
      <div className='space-x-3'>
        <a className='underlined' href='https://github.com/idm1try'>GitHub</a>
        <a className='underlined' href='https://mastodon.social/@idm1try' rel='me'>Mastodon</a>
        <a className='underlined' href='mailto:idm1try@icloud.com'>Mail</a>
      </div>
      <p>
        here my <a href='https://github.com/idm1try/dotfiles' className='underlined'>dotfiles</a> using Nix
      </p>
      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5 text-mauve'>Interests</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-neutral-400 dark:marker:text-neutral-500'>
          <li>
            <span>Nix</span>
          </li>
          <li>
            <span>Neovim</span>
          </li>
        </ul>
      </div>

      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5'>Tech</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-neutral-400 dark:marker:text-neutral-500'>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li>Next.js</li>
        </ul>
      </div>

      <div className='my-10'>
        <h2 className='font-bold text-xl mb-5'>Projects</h2>
        <ul className='list-disc list-inside space-y-2 marker:text-neutral-400 dark:marker:text-neutral-500'>
          <li>
            <a href='https://nxwtr.vercel.app' className='underlined'>Weather</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Home
