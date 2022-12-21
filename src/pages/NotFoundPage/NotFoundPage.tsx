import React from "react";
import { Link } from "react-router-dom";

import s from "./NotFoundPage.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <section className={s['not-found']}>
      
        <h1>404</h1>
        <h3>Данной странницы не существует!</h3>
        <Link to="/" className="btn">Домашняя страница</Link>
    
    </section>
  );
};

export default NotFoundPage;
