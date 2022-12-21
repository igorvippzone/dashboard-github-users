import React, { useContext } from "react";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

import { GithubContext } from "../../context/context";
import ItemInfo from "./ItemInfo/ItemInfo";
import s from "./Info.module.scss";

interface IItem {
  icon: JSX.Element;
  label: string;
  value: number;
  color: string;
}

const Info: React.FC = () => {
  const { githubUser } = useContext(GithubContext);

  let items: IItem[] | null = null;
  if (githubUser) {
    const { public_repos, followers, following, public_gists } = githubUser;

    items = [
      {
        icon: <GoRepo className={s.icon} />,
        label: "Репозиторий",
        value: public_repos,
        color: s.pink,
      },
      {
        icon: <FiUsers className={s.icon} />,
        label: "Подписчики",
        value: followers,
        color: s.green,
      },
      {
        icon: <FiUserPlus className={s.icon} />,
        label: "Вы подписаны",
        value: following,
        color: s.purple,
      },

      {
        icon: <GoGist className={s.icon} />,
        label: "Gists",
        value: public_gists,
        color: s.yellow,
      },
    ];
  }

  return (
    <section className="section">
      <div className={`section-center ${s.info}`}>
        {items?.map((item, index) => {
          return <ItemInfo key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Info;
