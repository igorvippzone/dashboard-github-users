import React, { useContext } from "react";
import { GithubContext } from "../../context/context";

import { Bar3D, Column3D, Doughut2D, Pie3D } from "../charts";

import s from "./Repos.module.scss";

const Repos: React.FC = () => {
  const { repos } = useContext(GithubContext);

  const languages = repos.reduce<{
    [key: string | number]: { value: number; label: string; stars: number };
  }>((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});

  const mostUsed = Object.values(languages).sort((a, b) => b.value - a.value);
  const mostPopular = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    });

  const { stars, forks } = repos.reduce<{
    stars: { [key: number]: any };
    forks: { [key: number]: any };
  }>(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = {
        label: name,
        value: stargazers_count,
      };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    {
      stars: {},
      forks: {},
    }
  );

  const dataStars = Object.values(stars).slice(-10).reverse();
  const dataForks = Object.values(forks).slice(-10).reverse()
  

  return (
    <section className="section section-center">
      <div className={s.repos}>
        <Pie3D data={mostUsed} />
        <Column3D data={dataStars} />
        <Doughut2D data={mostPopular} />
        <Bar3D data={dataForks} />
      </div>
    </section>
  );
};

export default Repos;
