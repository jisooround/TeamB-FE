import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RootArticle from './RootArticle';
import { useLocation, useParams } from 'react-router-dom';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: calc(100% + 4px);
  margin-left: -2px;
  height: 48px;
  border-bottom: 1px solid #eee;
  a {
    flex: 1 0 0;

    background-color: white;
    text-align: center;
    line-height: 48px;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 600;
    color: #333;
  }
  a:last-child {
    border-right: none;
  }
`;

const ResultSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  gap: 16px;

  border-radius: 16px;
  background-color: white;
  padding: 8px;

  max-width: 1136px;
  box-sizing: border-box;
  position: relative;
  margin-top: 40px;
  ::before {
    content: '';
    position: absolute;
    top: -40px;
    left: 50%;
    margin-left: -50vw;
    width: 100vw;
    height: 100%;
    background-color: #f5f5f5;
    z-index: -1;
  }
`;

const outline = [
  { key: 'more', name: '상세 정보' },
  { key: 'weather', name: '날씨' },
  { key: 'mapData', name: '지도' },
  { key: 'review', name: '평점과 후기' },
];

const index = () => {
  const { tourId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    console.log('useEffect : location', location.hash);
    document.querySelector(location.hash).scrollIntoView({ behavior: 'smooth' });
  }, [location.hash]);

  console.log('location', location);
  console.log('useParams : tourId', tourId);
  //params는 정보 넣을 때 쓸 것임

  return (
    <ResultSection>
      <Nav>
        {outline.map((item) => (
          <Link to={`#${item.key}`} key={item.key}>
            {item.name}
          </Link>
        ))}
      </Nav>
      {outline.map((item) => (
        <RootArticle key={item.key} id={item.key} />
      ))}
    </ResultSection>
  );
};

export default index;
