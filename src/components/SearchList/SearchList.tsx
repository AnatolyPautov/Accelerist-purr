import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../store/store';
import CompanyItem from '../companyItem';
import prev from '../../assets/icons/arrow-left.svg';
import next from '../../assets/icons/arrow-right.svg';
import { Row } from '../../ui/Row';
import { addCompanies } from '../../store/companySlice';
import Spinner from '../../ui/Spinner';
import UploadIcon from '../../assets/icons/UploadIcon';
import MailIcon from '../../assets/icons/MailIcon';
import FolderPlusIcon from '../../assets/icons/FolderPlusIcon';
import ModalSupport from '../../modals/ModalSupport';
import { Wrapper } from '../../ui/Wrapper';
import Pagination from './Pagination';

interface BoardProps {}
const SearchList: React.FC<BoardProps> = ({}) => {
  const stateCompany = useSelector(getCompaniesState);

  if (stateCompany.loading) {
    return <Spinner />;
  } else
    return (
      <Wrapper>
        {/* <ModalSupport /> */}
        <Container>
          <p>Found 32 companies</p>
          <Panel>
            <Row>
              <Action>
                <Icon>
                  <FolderPlusIcon />
                </Icon>
                <p>
                  Save<span> List</span>
                </p>
              </Action>
              <Action>
                <Icon>
                  <UploadIcon />
                </Icon>
                <p>
                  Export<span> to Excel</span>
                </p>
              </Action>
              <Action>
                <Icon>
                  <MailIcon />
                </Icon>
                <p>
                  <span>Accelerist </span>Support
                </p>
              </Action>
            </Row>
            <PaginationTop>
              <Pagination />
            </PaginationTop>
          </Panel>
          <CompaniesContainer>
            {stateCompany.companies.map((company, index) => (
              <CompanyItem company={company} key={index} />
            ))}
          </CompaniesContainer>
          <PaginationBottom>
            <Pagination />
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
const CompaniesContainer = styled.div`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Panel = styled.div`
  margin-top: 18px;
  max-width: 1096px;
  display: flex;
  justify-content: space-between;
`;
const Action = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-right: 37px;
  cursor: pointer;
  font-size: 12px;
  color: #122434;
  transition: 0.5s;
  &:hover {
    text-shadow: 0 0 0.01px #122434, 0 0 0.01px #122434;
  }
  span {
    @media (max-width: 620px) {
      display: none;
    }
  }

  @media (max-width: 750px) {
    margin-right: 22px;
  }
`;
const Icon = styled.div`
  margin-right: 17px;
  @media (max-width: 750px) {
    margin-right: 10px;
  }
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

export default SearchList;
