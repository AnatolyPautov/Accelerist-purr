import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../store/store';
import CompanyItem from '../companyItem';
import folderPlus from '../../assets/icons/folder-plus.svg';
import upload from '../../assets/icons/upload.svg';
import mail from '../../assets/icons/mail.svg';
import prev from '../../assets/icons/arrow-left.svg';
import next from '../../assets/icons/arrow-right.svg';
import { Row } from '../../ui/Row';
import { addCompanies } from '../../store/companySlice';

interface BoardProps {}
const SearchList: React.FC<BoardProps> = ({}) => {
  const state = useSelector(getCompaniesState);

  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <p>Found 32 companies</p>
        <Panel>
          <Row>
            <Action>
              <Icon>
                <ReactSVG src={folderPlus} />
              </Icon>
              <p>Save List</p>
            </Action>
            <Action>
              <Icon>
                <ReactSVG src={upload} />
              </Icon>
              <p>Export to Excel</p>
            </Action>
            <Action>
              <Icon>
                <ReactSVG src={mail} />
              </Icon>
              <p>Accelerist Support</p>
            </Action>
          </Row>
          <Row>
            <Arrow
              onClick={() =>
                dispatch(
                  addCompanies({ page: state.currentPage - 1, limit: 12 })
                )
              }
            >
              <ReactSVG src={prev} />
            </Arrow>
            {console.log(state.currentPage)}
            <PagesText>
              {12 * state.currentPage + 1 - 12}-{12 * state.currentPage} of{' '}
              {state.totalCompanies}
            </PagesText>
            <Arrow
              onClick={() =>
                dispatch(
                  addCompanies({ page: state.currentPage + 1, limit: 12 })
                )
              }
            >
              <ReactSVG src={next} />
            </Arrow>
          </Row>
        </Panel>
        <CompaniesContainer>
          {state.companies.map((company, index) => (
            <CompanyItem company={company} key={index} />
          ))}
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
const Panel = styled.div`
  margin-top: 15px;
  max-width: 1096px;
  display: flex;
  justify-content: space-between;
`;
const Action = styled.div`
  display: flex;
  align-items: center;
  margin-right: 37px;
  cursor: pointer;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  transition: 0.5s;
  &:hover {
    text-shadow: 0 0 0.01px #122434, 0 0 0.01px #122434;
  }
`;
const Icon = styled.div`
  margin-right: 17px;
`;
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

export default SearchList;
