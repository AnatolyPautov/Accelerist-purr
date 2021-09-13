import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../../store/store';
import prev from '../../../assets/icons/arrow-left.svg';
import next from '../../../assets/icons/arrow-right.svg';
import { addCompanies } from '../../../store/companySlice';

interface BoardProps {}
const Pagination: React.FC<BoardProps> = ({}) => {
  const stateCompany = useSelector(getCompaniesState);

  const dispatch = useAppDispatch();

  return (
    <PaginationContainer>
      {stateCompany.currentPage !== 1 && (
        <Arrow
          onClick={() =>
            dispatch(
              addCompanies({
                page: stateCompany.currentPage - 1,
                limit: 12,
                q: stateCompany.searchParams.q,
              })
            )
          }
        >
          <ReactSVG src={prev} />
        </Arrow>
      )}
      <PagesText>
        {12 * stateCompany.currentPage + 1 - 12}-
        {stateCompany.currentPage === stateCompany.totalPages
          ? stateCompany.totalCompanies
          : 12 * stateCompany.currentPage}{' '}
        of {stateCompany.totalCompanies}
      </PagesText>
      {stateCompany.currentPage !== stateCompany.totalPages && (
        <Arrow
          onClick={() =>
            dispatch(
              addCompanies({
                page: stateCompany.currentPage + 1,
                limit: 12,
                q: stateCompany.searchParams.q,
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
