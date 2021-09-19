import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { addCompanies } from '../../../store/companySlice';
import {
  getCompaniesState,
  getFavoritesState,
  getProspectsState,
  useAppDispatch,
} from '../../../store/store';
import Spinner from '../../../ui/Spinner';
import { Wrapper } from '../../../ui/Wrapper';
import Filtres from './Filters';
import SearchList from './SearchList';

interface Props {
  page?: string;
}
const SearchScreen: React.FC<Props> = ({ page }) => {
  const companies = useSelector(getCompaniesState);
  const favorites = useSelector(getFavoritesState);
  const prospects = useSelector(getProspectsState);

  const setState = () => {
    if (page === 'favorites') {
      return favorites;
    } else if (page === 'prospects') {
      return prospects;
    } else {
      return companies;
    }
  };

  return (
    <Wrapper>
      {/* <ModalSupport /> */}
      <Container>
        {!page && <Filtres />}
        {setState().loading ? <Spinner /> : <SearchList page={page} />}
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
