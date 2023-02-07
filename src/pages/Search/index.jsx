import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FcInfo } from 'react-icons/fc';
import { getKeyword } from '@api/api';
import SearchCard from '@components/search/SearchCard';
import PageTitle from '@components/common/PageTitle';
import Pagination from '@components/common/pagination/Pagination';
import { useLocation, useSearchParams } from 'react-router-dom';

const Search = () => {
  const [keywordParams, setKeywordParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const limit = 12;
  const offset = (page - 1) * limit;
  const [searchList, setSearchList] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(searchList);
  console.log(keywordParams);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchKeyword = query.get('keyword');
  console.log(searchKeyword);

  useEffect(() => {
    if (searchKeyword) {
      getSearchKeyword(page, searchKeyword);
    }
  }, [searchKeyword]);

  const getSearchKeyword = async () => {
    try {
      const response = await getKeyword(page, searchKeyword);
      setTotal(response.data.data.totalElements);
      setSearchList(response.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <PageTitle title={'검색 결과'} />
      {searchList.length > 0 ? (
        <>
          <h1>
            <span>{searchKeyword}</span>에 대한 검색 결과입니다.
          </h1>
          <Inner>
            {searchList.slice(offset, offset + limit).map((list, idx) => {
              return <SearchCard list={list} key={idx} />;
            })}
          </Inner>
        </>
      ) : (
        <NoList>
          <FcInfo size="40" />
          <h1>
            <span>{searchKeyword}</span>에 대한 검색 결과가 없습니다.
          </h1>
        </NoList>
      )}
      {searchList.length > 0 ? (
        <Pagination total={total} limit={limit} page={page} setPage={setPage} />
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
    span {
      color: #2358c5;
    }
  }
`;

const Inner = styled.div`
  width: 1136px;
  height: auto;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  @media (max-width: 1300px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media (max-width: 1160px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }
  gap: 30px;
`;

const NoList = styled.div`
  background-color: #f9f9f9;
  width: 1136px;
  height: 500px;
  margin: 40px auto 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  h1 {
    margin: 20px 0 0;
  }
`;

export default Search;
