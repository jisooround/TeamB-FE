import React from 'react';
import styled from 'styled-components';
import PageTitle from '@/components/common/PageTitle';
import { useRecoilValue } from 'recoil';
import { likeItemState } from '../../Atoms/likeAtom';
import LikeCard from '../../components/like/LikeCard';

const Like = () => {
  const likeItems = useRecoilValue(likeItemState);
  console.log(likeItems);

  return (
    <Container>
      <PageTitle title={'위시리스트'} />
      <Inner>
        {likeItems.map((list) => {
          return <LikeCard list={list} />;
        })}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 2000px;
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export default Like;
