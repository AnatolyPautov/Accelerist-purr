import React from 'react';
import styled from 'styled-components';
import SearchInput from '../searchInput';

interface SearchListProps {}
const PageHeader: React.FC<SearchListProps> = ({}) => {
  return (
    <>
      <SearchHeader>
        <Wrapper>
          <SearchTitle>Search</SearchTitle>
          <SearchInput width="715" background="#F1F4F5" />
        </Wrapper>
      </SearchHeader>
    </>
  );
};

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const SearchTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: #122434;
  margin-right: 82px;
`;

export default PageHeader;
