import React, { useState } from 'react';
import style from './WishFilter.module.scss';
import { useRecoilValue } from 'recoil';
import { wishItemState } from '@/Atoms/wishAtom';
import styled from 'styled-components';

const Wishfilter = ({ setLocation, filter, setFilter }) => {
  const wishItems = useRecoilValue(wishItemState);

  const handleClick = (event) => {
    if (event.target.outerText === '전체') {
      setFilter('');
    } else {
      setFilter(event.target.outerText);
    }
  };

  return (
    <Filter className={style.wrap}>
      <p className={style.total} onClick={handleClick}>
        전체
      </p>
      {setLocation.map((location) => {
        return <p onClick={handleClick}>{location}</p>;
      })}
    </Filter>
  );
};

const Filter = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;
  display: flex;
  p {
    padding: 20px 20px;
    cursor: pointer;
    color: #000;

    &:hover {
      background-color: #eee;
      border-radius: 30px;
    }

    &.focus {
      color: #fff;
      background-color: rgb(33, 33, 33);
      border-radius: 30px;
    }
  }
`;

export default Wishfilter;
