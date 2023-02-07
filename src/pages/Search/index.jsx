import React, { useState } from 'react';
import styled from 'styled-components';
import { searchListDummyData } from '@/data/dummydata';
import SearchCard from '@/components/search/SearchCard';
import PageTitle from '@/components/common/PageTitle';
import Pagination from '@/components/Common/pagination/Pagination';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { search } = useParams;
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;
  console.log(searchListDummyData);

  return (
    <Container>
      <PageTitle title={'검색 결과'} />
      {Array.isArray(searchListDummyData) ? (
        <>
          <h1>{search} 에 대한 검색 결과입니다.</h1>
          <Inner>
            {searchListDummyData.slice(offset, offset + limit).map((list) => {
              return <SearchCard list={list} />;
            })}
          </Inner>
        </>
      ) : (
        <NoList>
          <h1>{search} 에 대한 검색 결과가 없습니다.</h1>
        </NoList>
      )}
      {Array.isArray(searchListDummyData) ? (
        <Pagination
          total={searchListDummyData.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  h1 {
    text-align: center;
    margin: 40px 0 20px;
    font-size: 22px;
    font-weight: bold;
    color: #464646;
  }
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: 1160px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
`;

export default Search;
