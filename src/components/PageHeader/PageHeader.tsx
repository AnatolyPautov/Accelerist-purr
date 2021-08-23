import React from 'react';
import styled from 'styled-components';

interface SearchListProps {}
const PageHeader: React.FC<SearchListProps> = ({}) => {
  return (
    <>
      <SearchHeader>
        <Wrapper>Search</Wrapper>
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
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default PageHeader;
