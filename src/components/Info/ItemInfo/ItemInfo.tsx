import React from "react";

import s from './ItemInfo.module.scss'

type Props = {
  icon: JSX.Element;
  label: string;
  value: number;
  color: string;
};

const ItemInfo: React.FC<Props> = ({ icon, label, value, color }) => {
  return <article className={s.item}>
    <span className={color}>{icon}</span>
    <div>
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  </article>;
};

export default ItemInfo;
