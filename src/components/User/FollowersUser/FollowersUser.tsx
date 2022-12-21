import React, { useContext } from 'react'
import { GithubContext } from '../../../context/context'

import s from './FollowersUser.module.scss'

const FollowersUser: React.FC = () => {
  const {followers} = useContext(GithubContext)

  return (
    <article className={s.wrapper}>
      <div className={s.followers}>
        {followers?.map((follower)=>{
          const {avatar_url: img,id,html_url,login} = follower
          return <article key={id}>
            <img src={img} alt={login} />
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </article>
        }) }
      </div>
    </article>
  )
}

export default FollowersUser