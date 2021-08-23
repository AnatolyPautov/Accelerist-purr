import React from 'react';
import styled from 'styled-components';
import CompanyItem from '../CompanyItem';

interface BoardProps {}
const SearchList: React.FC<BoardProps> = ({}) => {
  return (
    <>
      <Container>
        <p>Found 32 companies</p>
        <CompaniesContainer>
          <CompanyItem />
        </CompaniesContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 32px 0;
`;
const CompaniesContainer = styled.div`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export default SearchList;
