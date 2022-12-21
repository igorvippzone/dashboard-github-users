import React from "react";

import s from './LoginPage.module.scss'

const LoginPage: React.FC = () => {
  return <section className={s.login}>
    <div className={s.container}>
      <h1>Пользователь Github</h1>
      <button className="btn">Войти</button>
    </div>
  </section>;
};

export default LoginPage;
