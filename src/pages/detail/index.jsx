import React from 'react';
import styled from 'styled-components';
import FirstSection from '@components/details/FirstSection';
import SecondSection from '@components/details/SecondSection';
import Test from '@components/details/Test';

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
  return (
    <DetailRoot>
      <SectionWrapper>
        <Test />
        <FirstSection />
        <SecondSection />
      </SectionWrapper>
    </DetailRoot>
  );
};

export default index;
