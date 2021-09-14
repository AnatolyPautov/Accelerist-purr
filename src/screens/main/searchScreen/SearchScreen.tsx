import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../../store/store';
import Spinner from '../../../ui/Spinner';
import { Wrapper } from '../../../ui/Wrapper';
import Filtres from './Filters';
import SearchList from './SearchList';

interface Props {
  page?: string;
}
const SearchScreen: React.FC<Props> = ({ page }) => {
  const stateCompany = useSelector(getCompaniesState);
  return (
    <Wrapper>
      {/* <ModalSupport /> */}
      <Container>
        <Filtres />
        {stateCompany.loading ? <Spinner /> : <SearchList page={page} />}
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
