import React from 'react'
import CurrentUser from './CurrentUser/CurrentUser'
import FollowersUser from './FollowersUser/FollowersUser'

import s from './User.module.scss'

const User: React.FC = () => {
  return (
    <section className='section section-center'>
      <div className={s.user}>
        <CurrentUser />
        <FollowersUser />
      </div>
    </section>
  )
}

export default User