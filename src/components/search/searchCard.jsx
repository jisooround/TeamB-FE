import React, { useState } from 'react';
import styled from 'styled-components';
import { AiTwotoneStar } from 'react-icons/Ai';
import { AiFillHeart } from 'react-icons/Ai';
import { AiOutlineHeart } from 'react-icons/Ai';

const SearchCard = ({ list }) => {
  console.log(list);
  const [like, setLike] = useState(false);
  console.log(like);

  function handleLikeClick() {
    setLike((like) => !like);
  }

  return (
    <Card>
      <Image>
        <img src={list.firstimage} alt={list.title + ' 사진'} />
        {like ? (
          <AiFillHeart className="like-icon" onClick={handleLikeClick} />
        ) : (
          <AiOutlineHeart className="like-icon" onClick={handleLikeClick} />
        )}
      </Image>
      <Info>
        <div className="title-wrap">
          <p className="title">{list.title}</p>
          <p className="rate">
            <AiTwotoneStar className="rate-icon" />
            {list.rate}
          </p>
        </div>
        <p className="addr1">{list.addr1}</p>
        <p className="infocenter">{list.infocenter}</p>
        <p className="cat3">
          #{list.cat3} #{list.inOut}
        </p>
      </Info>
    </Card>
  );
};

const Card = styled.div`
  width: 240px;
  height: 300px;
  padding: 35px 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 10px;
  background-color: #eee;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    height: 100%;
  }
  .like-icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #2358c5;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  p {
    line-height: 1.3;
  }
  .title-wrap {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
    width: 100%;
    .title {
      font-weight: 700;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: #1b1b1b;
      cursor: pointer;
    }
    .rate {
      display: flex;
      align-items: center;
      .rate-icon {
        margin-bottom: 3px;
        margin-right: 2px;
        font-size: 14px;
      }
    }
  }
  .addr1,
  .infocenter {
    width: 100%;
    font-size: 14px;
    color: #676767;
    margin-bottom: 2px;
  }
  .cat3 {
    width: 100%;
    font-size: 13px;
    color: #676767;
  }
`;

export default SearchCard;
