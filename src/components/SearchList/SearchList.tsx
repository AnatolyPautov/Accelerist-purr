import React from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { getCompanies } from '../../store/store';
import CompanyItem from '../companyItem';
import folderPlus from '../../assets/icons/folder-plus.svg';
import upload from '../../assets/icons/upload.svg';
import mail from '../../assets/icons/mail.svg';

interface BoardProps {}
const SearchList: React.FC<BoardProps> = ({}) => {
  const companies = useSelector(getCompanies);
  return (
    <>
      <Container>
        <p>Found 32 companies</p>
        <Panel>
          <Actions>
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
          </Actions>
          <Pagination></Pagination>
        </Panel>
        <CompaniesContainer>
          {companies.map((company, index) => (
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
  margin-top: 26px;
`;
const Actions = styled.div`
  display: flex;
`;
const Action = styled.div`
  height: 30px;
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
const Pagination = styled.div``;

export default SearchList;
