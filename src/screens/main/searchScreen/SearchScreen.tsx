import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCompaniesState } from '../../../store/store';
import Spinner from '../../../ui/Spinner';
import { Wrapper } from '../../../ui/Wrapper';
import Filtres from './Filters';
import CardsList from './CardsList';

interface Props {
  page?: string;
}
const SearchScreen: React.FC<Props> = ({ page }) => {
  const companies = useSelector(getCompaniesState);

  return (
    <Wrapper>
      {/* <ModalSupport /> */}
      <Container>
        {!page && <Filtres />}
        {companies.loading ? <Spinner /> : <CardsList page={page} />}
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

export default SearchScreen;
