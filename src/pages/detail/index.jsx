import React from 'react';
import styled from 'styled-components';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

const DetailRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 100%;
  position: relative;
  background: #ffffff;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1136px;
  padding-top: 32px;
`;

const index = () => {
  return (
    <DetailRoot>
      <SectionWrapper>
        <FirstSection />
        <Test />
        <SecondSection />
      </SectionWrapper>
    </DetailRoot>
  );
};

export default index;
