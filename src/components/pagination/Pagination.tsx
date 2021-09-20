import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import {
  getCompaniesState,
  getFavoritesState,
  getProspectsState,
  useAppDispatch,
} from '../../store/store';
import prev from '../../assets/icons/arrow-left.svg';
import next from '../../assets/icons/arrow-right.svg';
import { addCompanies } from '../../store/companySlice';
import { addFavorites } from '../../store/favoritesSlice';
import { addProspects } from '../../store/prospectsSlice';

interface Props {
  page?: string;
}
const Pagination: React.FC<Props> = ({ page }) => {
  const companies = useSelector(getCompaniesState);
  const favorites = useSelector(getFavoritesState);
  const prospects = useSelector(getProspectsState);

  const dispatch = useAppDispatch();

  const setState = () => {
    if (page === 'favorites') {
      return favorites;
    } else if (page === 'prospects') {
      return prospects;
    } else {
      return companies;
    }
  };

  const setNumberItems = (state: any) => {
    return (
      12 * state.currentPage +
      1 -
      12 +
      ' - ' +
      (state.currentPage === state.totalPages
        ? state.totalItems
        : 12 * state.currentPage) +
      ' of ' +
      state.totalItems
    );
  };

  const flipping = (plus: boolean, state: any) => {
    let numberPage = plus ? state.currentPage + 1 : state.currentPage - 1;
    switch (page) {
      case 'favorites':
        return dispatch(
          addFavorites({
            page: numberPage,
            limit: 12,
          })
        );
      case 'prospects':
        return dispatch(
          addProspects({
            page: numberPage,
            limit: 12,
          })
        );
      default:
        return dispatch(
          addCompanies({
            page: numberPage,
            limit: 12,
            q: companies.searchParams.q,
            revenueMin: companies.searchParams.revenueMin,
            revenueMax: companies.searchParams.revenueMax,
          })
        );
    }
  };
  return (
    <PaginationContainer>
      {setState().currentPage !== 1 && (
        <Arrow onClick={() => flipping(false, setState())}>
          <ReactSVG src={prev} />
        </Arrow>
      )}
      <PagesText>{setNumberItems(setState())}</PagesText>
      {setState().currentPage !== setState().totalPages && (
        <Arrow onClick={() => flipping(true, setState())}>
          <ReactSVG src={next} />
        </Arrow>
      )}
    </PaginationContainer>
  );
};

const Arrow = styled.button`
  background: transparent;
  cursor: pointer;
`;
const PagesText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin: 0 19px;
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Pagination;
