import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/Ai';
import { AiFillHeart } from 'react-icons/Ai';
import { AiOutlineHeart } from 'react-icons/Ai';
import style from './SearchCard.module.scss';

const SearchCard = ({ list }) => {
  const [like, setLike] = useState(false);

  function handleLikeClick() {
    setLike((like) => !like);
  }

  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
        {like ? (
          <AiFillHeart className={style.likeIcon} onClick={handleLikeClick} />
        ) : (
          <AiOutlineHeart className={style.likeIcon} onClick={handleLikeClick} />
        )}
      </div>
      <div className={style.info}>
        <div className={style.titleWrap}>
          <p className={style.title}>{list.title}</p>
          <p className={style.rate}>
            <AiTwotoneStar className="rate-icon" />
            {list.rate}
          </p>
        </div>
        <p className={style.addr1}>{list.addr1}</p>
        <p className={style.infocenter}>{list.infocenter}</p>
        <p className={style.cat3}>
          #{list.cat3} #{list.inOut}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
