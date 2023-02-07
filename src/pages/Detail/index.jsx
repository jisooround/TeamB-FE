import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FirstSection from '@components/details/FirstSection';
import SecondSection from '@components/details/SecondSection';
import { useLocation, useParams } from 'react-router-dom';
import { getDetails } from '@api/api';
import { detailDummydata } from '../../data/dummydata';

const DetailRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  position: relative;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;
  max-width: 1136px;
  padding-top: 32px;
  gap: 32px;
`;

const index = () => {
  const { tourId } = useParams();
  // const id = 2763807;
  const location = useLocation();
  const [tour, setTour] = useState({});
  const [error, setError] = useState('');

  // useEffect(() => {
  //   // 페이지 이동
  //   if (!location.hash) return;
  //   // console.log('스크롤 실행');
  //   gotoID(location.hash);
  // }, []);

  useEffect(() => {
    try {
      getDetails(tourId, setTour, setError);
    } catch (error) {
      console.log(error);
    }
  }, [tourId]);

  console.log('location', location);
  console.log('useParams : tourId', tourId);

  function gotoID(id) {
    // console.log('gotoID : id', id);
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <DetailRoot>
      <SectionWrapper>
        <FirstSection tour={tour} gotoID={gotoID} />
        <SecondSection tour={tour} gotoID={gotoID} />
      </SectionWrapper>
    </DetailRoot>
  );
};

export default index;
