import React from 'react';
import style from './LikeCard.module.scss';
import { AiTwotoneStar } from 'react-icons/Ai';
import LikeIcon from '../../components/common/LikeIcon';

const LikeCard = ({ list }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
        <LikeIcon className={style.likeIcon} list={list} />
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

export default LikeCard;
