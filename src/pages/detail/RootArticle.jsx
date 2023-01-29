import React from 'react';
import styled from 'styled-components';

const RootArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1136px;
  height: 500px;

  background-color: #f5f5f5;
`;

const index = ({ id }) => {
  return <RootArticle id={id}>hello{`${id}`}</RootArticle>;
};

export default index;
