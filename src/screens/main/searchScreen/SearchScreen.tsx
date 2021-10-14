import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../../store/store';
import { Wrapper } from '../../../ui/Wrapper';
import { Loader } from '../../../ui/Loader';
import { addCompanies } from '../../../store/companiesSlice';
import Filtres from './Filters';
import CardsList from './CardsList';

interface Props {
  page?: string;
}
const SearchScreen: React.FC<Props> = ({ page }) => {
  const companies = useSelector(getCompaniesState);

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (!page) {
      dispatch(addCompanies({ page: 1, limit: 12 }));
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        {!page && <Filtres />}
        {companies.loading ? (
          <Loader size="big" variant="secondary" />
        ) : (
          <CardsList page={page} />
        )}
      </Container>
    </Wrapper>
  );
};

const Container = styled.div`
  padding: 32px 0;
  height: 100%;
  @media (max-width: 525px) {
    padding: 20px 0;
  }
`;

export default SearchScreen;
