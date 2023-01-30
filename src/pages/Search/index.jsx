import React from 'react';
import styled from 'styled-components';
import { searchListDummyData } from '../../data/dummydata';

const Search = () => {
  // console.log(searchListDummyData);
  return (
    <Container>
      <Inner>
        {searchListDummyData.map((list) => {
          return (
            <Card>
              <Image>
                <img src={list.image} alt="" />
              </Image>
              <Info>
                <p className="title">{list.title}</p>

                <p className="address">{list.address}</p>
                <p className="number">{list.number}</p>
                <p className="tag">#{list.tag}</p>
              </Info>
            </Card>
          );
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

const Card = styled.div`
  width: 240px;
  height: 300px;
  padding: 35px 0;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

const Image = styled.div`
  width: 100%;
  aspect-ratio: 7/5;
  border-radius: 10px;
  background-color: #eee;
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  border-top: 1px solid #676767;
  p {
    line-height: 1.3;
  }
  .title {
    width: 100%;
    font-weight: 700;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-bottom: 7px;
    color: #1b1b1b;
  }
  .address,
  .number {
    width: 100%;
    font-size: 14px;
    color: #676767;
  }
  .tag {
    width: 100%;
    font-size: 12px;
    color: #676767;
  }
`;

export default Search;
