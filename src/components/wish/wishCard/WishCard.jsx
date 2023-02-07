import React from 'react';
import styles from './WishCard.module.scss';
import { AiTwotoneStar } from 'react-icons/Ai';
import WishIcon from '../../common/wishIcon/WishIcon';
import { MdLocationPin } from 'react-icons/Md';
import { MdCall } from 'react-icons/Md';

const WishCard = ({ list }) => {
  return (
    <div className={styles.wrap}>
      <WishIcon className={styles.wishIcon} list={list} />
      <div className={styles.image}>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleWrap}>
          <div>
            <p className={styles.title}>{list.title}</p>
            <p className={styles.cat3}>
              #{list.cat3} #{list.inOut}
            </p>
          </div>

          <p className={styles.rate}>
            <AiTwotoneStar className="rate-icon" />
            {list.rate}
          </p>
        </div>
        <div className={styles.detailWrap}>
          <div className={styles.group}>
            <MdLocationPin className={styles.addrIcon} />
            <p className={styles.addr1}>{list.addr1}</p>
          </div>
          <div className={styles.group}>
            <MdCall className={styles.infocenterIcon} />
            <p className={styles.infocenter}>{list.infocenter}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
