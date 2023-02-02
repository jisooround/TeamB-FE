import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/Ai';
import { AiOutlineHeart } from 'react-icons/Ai';
import style from './LikeIcon.module.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { likeItemState } from '../../Atoms/likeAtom.jsx';

const LikeIcon = ({ list }) => {
  const [like, setLike] = useState(false);
  const setLikeItem = useSetRecoilState(likeItemState);
  const likeItemList = useRecoilValue(likeItemState);

  const likeCheck = () => {
    likeItemList.filter((obj) => {
      if (obj.contentid === list.contentid) {
        setLike(true);
      }
    });
  };

  useEffect(() => {
    likeCheck();
  }, [likeItemList]);

  const insertItem = () => {
    setLikeItem((oldLikeItem) => [
      ...oldLikeItem,
      {
        addr1: list.addr1,
        contentid: list.contentid,
        title: list.title,
        cat3: list.cat3,
        infocenter: list.infocenter,
        firstimage: list.firstimage,
        inOut: list.inOut,
        rate: list.rate,
      },
    ]);
  };

  const removeItem = () => {
    console.log(likeItemList);
    const num = likeItemList.filter((obj) => {
      return obj.contentid !== list.contentid;
    });
    setLikeItem(num);
    console.log(likeItemList);
  };

  function handleInsertLike() {
    insertItem();
    setLike((like) => !like);
  }

  function handleRemoveLike() {
    removeItem();
    setLike((like) => !like);
  }

  return (
    <div>
      {like ? (
        <AiFillHeart className={style.likeIcon} onClick={handleRemoveLike} />
      ) : (
        <AiOutlineHeart className={style.likeIcon} onClick={handleInsertLike} />
      )}
    </div>
  );
};

export default LikeIcon;
