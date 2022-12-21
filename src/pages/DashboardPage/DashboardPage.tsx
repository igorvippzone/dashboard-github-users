import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Info, NavBar, Repos, Search, User } from "../../components";
import Loader from "../../components/Loader/Loader";
import { GithubContext } from "../../context/context";

import s from "./DashboardPage.module.scss";

const DashboardPage: React.FC = () => {
  const {isLoading} = useContext(GithubContext)

  if(isLoading){
    return <main>
      <NavBar />
      <Search />
      <Loader />
    </main>
  }

  return (
    <main>
      <NavBar />
      <Search />
      <Info />
      <User />
      <Repos />
      {/* <Link to='/sfa'>404</Link> */}
    </main>
  );
};

export default DashboardPage;
