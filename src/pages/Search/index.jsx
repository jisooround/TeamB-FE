import React from 'react';
import styled from 'styled-components';
import { searchListDummyData } from '../../data/dummydata';
import SearchCard from '../../components/search/SearchCard';

const Search = () => {
  console.log(searchListDummyData);
  return (
    <Container>
      <Inner>
        {searchListDummyData.map((list) => {
          return <SearchCard list={list} key={list.contentid} />;
          // console.log(list);
        })}
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  padding: 40px 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  place-items: center;
`;

export default Search;
