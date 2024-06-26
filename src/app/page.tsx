import Time from '@/components/time'

const Home = () => (
  <section>
    <div>
      <h1 className='mb-2 text-xl font-bold'>idm1try</h1>
      <div className='text-overlay0 mb-5 flex space-x-2'>
        <span>they/them</span> <span>-</span> <Time />
      </div>
    </div>
    <ul className='animated-list grid grid-cols-1 sm:grid-cols-2'>
      <li>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            github
          </span>
          <a className='underlined' href='https://github.com/idm1try'>idm1try</a>
        </div>
      </li>
      <li>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            mastodon
          </span>
          <a className='underlined' href='https://social.treehouse.systems/@idm1try' rel='me'>
            @idm1try@treehouse.systems
          </a>
        </div>
      </li>
      <li>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            mail
          </span>
          <a className='underlined' href='mailto:idm1try@icloud.com'>idm1try@icloud.com</a>
        </div>
      </li>
      <li>
        <div className='flex py-3 flex-col gap-1'>
          <span className='text-overlay0'>
            xmpp
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
