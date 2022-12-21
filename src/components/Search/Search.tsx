import React, { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../../context/context";

import s from "./Search.module.scss";

const Search: React.FC = () => {
  const [user, setUser] = useState("");

  const { requests, error, searchGithubUser, isLoading } =
    useContext(GithubContext);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.trim()) {
      searchGithubUser(user);
      setUser("");
    }
  };

  return (
    <section className="section section-center">
      <div className={s.wrapper}>
        {error.show && (
          <div className={s.error}>
            <p>{error.msg}</p>
          </div>
        )}

        <form onSubmit={submitHandler}>
          <div className={s["form-control"]}>
            <MdSearch />
            <input
              type="text"
              placeholder="Введите пользователя GitHub"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests && !isLoading && <button type="submit">Поиск</button>}
          </div>
        </form>

        <h3>запросов: {requests}/60 </h3>
      </div>
    </section>
  );
};

export default Search;
