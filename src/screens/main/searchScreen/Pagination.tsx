import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import {
  getCompaniesState,
  getFavoritesState,
  useAppDispatch,
} from '../../../store/store';
import prev from '../../../assets/icons/arrow-left.svg';
import next from '../../../assets/icons/arrow-right.svg';
import { addCompanies } from '../../../store/companySlice';
import { addFavorites } from '../../../store/favoritesSlice';

interface Props {
  page?: string;
}
const Pagination: React.FC<Props> = ({ page }) => {
  const companies = useSelector(getCompaniesState);
  const favorites = useSelector(getFavoritesState);

  const dispatch = useAppDispatch();

  return (
    <PaginationContainer>
      {!page
        ? companies.currentPage !== 1 && (
            <Arrow
              onClick={() =>
                dispatch(
                  addCompanies({
                    page: companies.currentPage - 1,
                    limit: 12,
                    q: companies.searchParams.q,
                  })
                )
              }
            >
              <ReactSVG src={prev} />
            </Arrow>
          )
        : favorites.currentPage !== 1 && (
            <Arrow
              onClick={() =>
                dispatch(
                  addFavorites({
                    page: favorites.currentPage - 1,
                    limit: 12,
                  })
                )
              }
            >
              <ReactSVG src={prev} />
            </Arrow>
          )}
      <PagesText>
        {!page
          ? 12 * companies.currentPage +
            1 -
            12 +
            ' - ' +
            (companies.currentPage === companies.totalPages
              ? companies.totalCompanies
              : 12 * companies.currentPage) +
            ' of ' +
            companies.totalCompanies
          : 12 * favorites.currentPage +
            1 -
            12 +
            ' - ' +
            (favorites.currentPage === favorites.totalPages
              ? favorites.totalCompanies
              : 12 * favorites.currentPage) +
            ' of ' +
            favorites.totalCompanies}
      </PagesText>
      {!page
        ? companies.currentPage !== companies.totalPages && (
            <Arrow
              onClick={() =>
                dispatch(
                  addCompanies({
                    page: companies.currentPage + 1,
                    limit: 12,
                    q: companies.searchParams.q,
                  })
                )
              }
            >
              <ReactSVG src={next} />
            </Arrow>
          )
        : favorites.currentPage !== favorites.totalPages && (
            <Arrow
              onClick={() =>
                dispatch(
                  addFavorites({
                    page: favorites.currentPage + 1,
                    limit: 12,
                  })
                )
              }
            >
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
