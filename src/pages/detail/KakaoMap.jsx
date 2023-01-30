import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { kakaoLoad } from '@atom/loadAtom';
import { useRecoilValue } from 'recoil';

const RootArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1136px;
  height: 2000px;

  background-color: #f5f5f5;
`;

const MapRegion = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;
// 아이디는 더 내려가서 제목에 넣는다.
const Index = ({ id }) => {
  const kakaoState = useRecoilValue(kakaoLoad);
  useEffect(() => {
    console.log('kakaoState', kakaoState);
    if (!kakaoState) return;
    kakao.maps.load(function () {
      // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
      const container = document.getElementById('kakao'); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    });
  }, [kakaoState]);

  return (
    <RootArticle>
      <MapRegion id={id}>
        <div>주소</div>
        <div> 테스트</div>
      </MapRegion>
      <RootArticle id="kakao"></RootArticle>
    </RootArticle>
  );
};

export default Index;
