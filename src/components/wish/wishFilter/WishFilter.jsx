import React from 'react';
import style from './WishFilter.module.scss';

const Wishfilter = ({ wishLocation }) => {
  const set = new Set(wishLocation);
  const uniqueArr = [...set];
  return (
    <div className={style.wrap}>
      <p className={(style.total, style.focus)}>전체</p>
      {uniqueArr.map((location) => {
        return <p>{location}</p>;
      })}
    </div>
  );
};

export default Wishfilter;
