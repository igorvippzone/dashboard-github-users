import React, { useContext } from "react";
import { MdBusiness, MdLink, MdLocationOn } from "react-icons/md";

import { GithubContext } from "../../../context/context";

import s from "./CurrentUser.module.scss";

const CurrentUser: React.FC = () => {
  const { githubUser } = useContext(GithubContext);

  if (githubUser) {
    const {
      avatar_url,
      html_url,
      name,
      company,
      blog,
      bio,
      location,
    } = githubUser;

    return (
      <article className={s["current-user"]}>
        <header>
          <img src={avatar_url} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>{location}</p>
          </div>
          <a href={html_url}>Перейти</a>
        </header>
        <p className={s.bio}>{bio}</p>
        <div className={s.links}>
          <p>
            <MdBusiness /> {company || "не указано"}
          </p>
          <p>
            <MdLocationOn /> {location || "не указано"}
          </p>
          <a href={`https://${blog}`}>
            <MdLink /> {blog}
          </a>
        </div>
      </article>
    );
  }

  return <article className={s["current-user"]}>CurrentUser</article>;
};

export default CurrentUser;
