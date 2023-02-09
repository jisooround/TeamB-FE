import React from 'react';
import styles from './WishCard.module.scss';
import { AiTwotoneStar } from 'react-icons/ai';
import WishIcon from '../../common/wishIcon/WishIcon';
import { MdLocationPin } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdImageNotSupported } from 'react-icons/md';
import { Link } from 'react-router-dom';

const WishCard = ({ list }) => {
  return (
    <div className={styles.wrap}>
      <WishIcon className={styles.wishIcon} list={list} />
      <Link to={'/detail/' + list.contentid}>
        <div className={styles.image}>
          {list.firstimage ? (
            <img src={list.firstimage} alt={list.title + ' 사진'} />
          ) : (
            <div className={styles.noImage}>
              <MdImageNotSupported size="84" color="#fff" className={styles.icon} />
              <p>No Image</p>
            </div>
          )}
        </div>
      </Link>
      <div className={styles.info}>
        <div className={styles.titleWrap}>
          <div>
            <Link to={'/detail/' + list.contentid}>
              <p className={styles.title}>{list.title}</p>
            </Link>
            <p className={styles.cat3}>
              #{list.cat3} {list.inOut ? `# ${list.inOut}` : null}
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
            <p className={styles.addr1}>{list.addr1 ? list.addr1 : null}</p>
          </div>
          <div className={styles.group}>
            <MdCall className={styles.infocenterIcon} />
            <p className={styles.infocenter}>{list.infocenter ? list.infocenter : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
