import Time from '@/components/time'

const Home = () => (
  <section>
    <h1 className='mb-2 text-xl font-bold'>idm1try</h1>
    <p className='text-overlay0 mb-5'>frontend developer</p>
    <Time />

    <ul className='animated-list grid grid-cols-1 sm:grid-cols-2'>
      <li className='transition-all duration-300'>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            GitHub
          </span>
          <a className='underlined' href='https://github.com/idm1try'>idm1try</a>
        </div>
      </li>
      <li className='transition-all duration-300'>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            Mastodon
          </span>
          <a className='underlined' href='https://social.treehouse.systems/@idm1try' rel='me'>
            @idm1try@treehouse.systems
          </a>
        </div>
      </li>
      <li className='transition-all duration-300'>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            Mail
          </span>
          <a className='underlined' href='mailto:idm1try@icloud.com'>idm1try@icloud.com</a>
        </div>
      </li>
      <li className='transition-all duration-300'>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            XMPP
          </span>
          <span>
            idm1try@5222.de
          </span>
        </div>
      </li>
    </ul>
  </section>
)

export default Home
