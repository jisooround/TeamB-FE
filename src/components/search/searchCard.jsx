import React from 'react';
import { AiTwotoneStar } from 'react-icons/Ai';
import WishIcon from '../../components/common/WishIcon/WishIcon';
import styles from './SearchCard.module.scss';

const SearchCard = ({ list }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
        <WishIcon className={styles.wishIcon} list={list} isSearch={true} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleWrap}>
          <p className={styles.title}>{list.title}</p>
          <p className={styles.rate}>
            <AiTwotoneStar className={styles.rateIcon} />
            {list.rate}
          </p>
        </div>
        <p className={styles.addr1}>{list.addr1}</p>
        <p className={styles.infocenter}>{list.infocenter}</p>
        <p className={styles.cat3}>
          #{list.cat3} #{list.inOut}
        </p>
      </div>
    </div>
  );
};

export default SearchCard;
