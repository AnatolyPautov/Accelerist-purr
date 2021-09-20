import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CompanyCard from '../../../components/companyCard';
import Pagination from '../../../components/pagination';
import { getFavoritesState } from '../../../store/store';
import { Subtitle } from '../../../ui/Subtitle';
import { Wrapper } from '../../../ui/Wrapper';

interface Props {}
const FavoritesScreen: React.FC<Props> = ({}) => {
  const favorites = useSelector(getFavoritesState);

  return (
    <Wrapper>
      <Container>
        <Top>
          <Subtitle>{favorites.totalItems} companies</Subtitle>
          <PaginationTop>
            <Pagination page="favorites" />
          </PaginationTop>
        </Top>
        <ItemContainer>
          {favorites.favorites.map((company, index) => (
            <CompanyCard company={company} key={index} />
          ))}
        </ItemContainer>
        <PaginationBottom>
          <Pagination page="favorites" />
        </PaginationBottom>
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  padding: 32px 0;
  @media (max-width: 525px) {
    padding: 20px 0;
  }
`;
const Top = styled.div`
  max-width: 1096px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ItemContainer = styled.div`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const PaginationTop = styled.div`
  @media (max-width: 525px) {
    display: none;
  }
`;
const PaginationBottom = styled.div`
  display: none;
  @media (max-width: 525px) {
    display: block;
  }
`;

export default FavoritesScreen;
