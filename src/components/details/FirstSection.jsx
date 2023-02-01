import React from 'react';
import styled from 'styled-components';
import styles from '@styles/designSystem.module.scss';

const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  padding: 0px;
  gap: 16px;
  flex: 0;
`;

const FirstSectionLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 16px;
  background-color: aliceblue;
  flex: 7 0 70px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const FirstSectionRight = styled.div`
  flex: 5 0 50px;

  div.padding {
    padding: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;

    gap: 16px;
    background-color: aliceblue;
  }
`;

const index = () => {
  return (
    <FirstSection>
      <FirstSectionLeft>
        <img
          src={
            'https://c.pxhere.com/photos/56/ca/gwanghwamun_seoul_gyeongbok_palace_forbidden_city-906985.jpg!d'
          }
        ></img>
      </FirstSectionLeft>
      <FirstSectionRight>
        <div className={'padding'}>
          <div>제목</div>
          <div>주소</div>
          <div>관광지 태그</div>
          <div>관광지 편의 시설</div>
        </div>
      </FirstSectionRight>
    </FirstSection>
  );
};

export default index;
