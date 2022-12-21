import React, { useEffect, useState } from "react";
import axios from "axios";

import { IFollower, IRepos, IUser } from "../models/interfaces";
import { followersData } from "./mockData/mockFollowers";
import { reposData } from "./mockData/mockRepos";
import { userData } from "./mockData/mockUser";

const rootUrl = "https://api.github.com";

interface IDefaultCtx {
  githubUser: IUser | null;
  repos: IRepos[];
  followers: IFollower[];
  requests: number;
  error: { show: boolean; msg: string };
  searchGithubUser: any;
  isLoading: boolean;
}

const GithubContext = React.createContext<IDefaultCtx>({
  githubUser: null,
  repos: [],
  followers: [],
  requests: 0,
  error: { show: false, msg: "" },
  searchGithubUser: "",
  isLoading: false,
});

type IProvider = {
  children: React.ReactNode;
};

const GithubProvider: React.FC<IProvider> = ({ children }) => {
  const [githubUser, setGithubUser] = useState<IUser>(userData);
  const [repos, setRepos] = useState<IRepos[]>(reposData);
  const [followers, setFollowers] = useState<IFollower[]>(followersData);

  const [requests, setRequests] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<{ show: boolean; msg: string }>({
    show: false,
    msg: "",
  });

  const searchGithubUser = async (user: string) => {
    toggleError();
    setIsLoading(true);

    try {
      const resUser = await axios(`${rootUrl}/users/${user}`);

      const { login, followers_url } = resUser.data;

      setGithubUser(resUser.data);
      console.log(`${rootUrl}/users/${login}/repos?per_page=100`);
      console.log(`${followers_url}?per_page=100`);
      
      await Promise.all([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((result) => {
        console.log(result);

        const [repos, followers] = result;
        setRepos(repos.data);
        setFollowers(followers.data);
      });
    } catch (error) {
      toggleError(true, "Пользователь не найден");
      console.log("11111111111111111111111", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkRequests = (): void => {
    axios(`${rootUrl}/rate_limit`)
      .then((data) => {
        const {
          rate: { remaining },
        } = data.data;
        setRequests(remaining);

        if (remaining === 0) {
          toggleError(
            true,
            "Вы превысили лимит запросов, лимит обновится через час"
          );
        }
      })
      .catch((error) => console.log(error));
  };

  const toggleError = (show = false, msg = ""): void => {
    setError({
      show,
      msg,
    });
  };

  useEffect(() => checkRequests(), []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
