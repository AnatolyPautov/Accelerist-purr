import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../../ui/Wrapper';
import Filtres from './Filters';
import SearchList from './SearchList';

interface Props {
  page?: string;
}
const SearchScreen: React.FC<Props> = ({ page }) => {
  return (
    <Wrapper>
      {/* <ModalSupport /> */}
      <Container>
        <Filtres />
        <SearchList page={page} />
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
