import React, { HtmlHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../store/store';
import CompanyItem from '../companyItem';
import { Row } from '../../ui/Row';
import UploadIcon from '../../assets/icons/UploadIcon';
import MailIcon from '../../assets/icons/MailIcon';
import FolderPlusIcon from '../../assets/icons/FolderPlusIcon';
import Pagination from './Pagination';

interface BoardProps {}
const SearchList: React.FC<BoardProps> = ({}) => {
  const stateCompany = useSelector(getCompaniesState);

  const fieldRef = React.useRef<any>(null);
  React.useEffect(() => {
    if (fieldRef.current) {
      fieldRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, []);
  return (
    <div ref={fieldRef}>
      {}
      <p>Found {stateCompany.totalCompanies} companies</p>
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
    </div>
  );
};

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
  color: ${({ theme }) => theme.colors.black};
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
