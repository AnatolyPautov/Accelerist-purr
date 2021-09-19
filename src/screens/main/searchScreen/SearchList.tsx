import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getCompaniesState,
  getFavoritesState,
  getProspectsState,
  useAppDispatch,
} from '../../../store/store';
import CompanyItem from '../../../components/companyItem';
import UploadIcon from '../../../assets/icons/UploadIcon';
import MailIcon from '../../../assets/icons/MailIcon';
import FolderPlusIcon from '../../../assets/icons/FolderPlusIcon';
import Pagination from './Pagination';
import { Subtitle } from '../../../ui/Subtitle';
import ProspectCard from '../dashboardScreen/ProspectCard';
import { addProspects, createProspect } from '../../../store/prospectsSlice';
import { Text } from '../../../ui/Text';

interface BoardProps {
  page?: string;
}
const SearchList: React.FC<BoardProps> = ({ page }) => {
  const companies = useSelector(getCompaniesState);
  const favorites = useSelector(getFavoritesState);
  const prospects = useSelector(getProspectsState);

  const dispatch = useAppDispatch();

  const Ref = React.useRef<any>(null);
  React.useEffect(() => {
    Ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  const renderItems = () => {
    if (page === 'favorites') {
      return favorites.favorites.map((company, index) => (
        <CompanyItem company={company} key={index} />
      ));
    } else if (page === 'prospects') {
      return prospects.prospects.map((item, index) => (
        <ProspectCard item={item} key={index} />
      ));
    } else {
      return companies.companies.map((company, index) => (
        <CompanyItem company={company} key={index} />
      ));
    }
  };
  const renderTop = () => {
    if (page === 'favorites') {
      return <Subtitle>{favorites.totalItems} companies</Subtitle>;
    } else if (page === 'prospects') {
      return (
        <Sort>
          <SortText>Sort by</SortText>
          <SortTabs>
            <input type="radio" name="tab-btn" id="tab-btn-1" value="" />
            <label
              htmlFor="tab-btn-1"
              onClick={() =>
                dispatch(addProspects({ page: 1, limit: 15, sort: 'alphabet' }))
              }
            >
              Alphabet
            </label>
            <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
            <label
              htmlFor="tab-btn-2"
              onClick={() =>
                dispatch(
                  addProspects({ page: 1, limit: 15, sort: 'available' })
                )
              }
            >
              Prospects Available
            </label>
            <input type="radio" name="tab-btn" id="tab-btn-3" value="" />
            <label
              htmlFor="tab-btn-3"
              onClick={() =>
                dispatch(
                  addProspects({
                    page: 1,
                    limit: 15,
                    sort: 'last-activity',
                  })
                )
              }
            >
              Last Activity
            </label>
          </SortTabs>
        </Sort>
      );
    } else if (page === 'prospect') {
      return (
        <div>
          <Subtitle mb="24">{companies.totalItems} companies</Subtitle>
          <Text mb="8">Filters</Text>
          <Filters>
            <Category>Travel Industry</Category>
          </Filters>
          <Action>
            <Icon>
              <UploadIcon />
            </Icon>
            <p>
              Export<span> to Excel</span>
            </p>
          </Action>
        </div>
      );
    } else {
      return (
        <div>
          <Subtitle>{'Found ' + companies.totalItems} companies</Subtitle>
          <Panel>
            <Action
              onClick={() => dispatch(createProspect(companies.searchParams))}
            >
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
          </Panel>
        </div>
      );
    }
  };

  return (
    <div ref={Ref}>
      <Top>
        {renderTop()}
        <PaginationTop>
          <Pagination page={page} />
        </PaginationTop>
      </Top>
      <ItemContainer>{renderItems()}</ItemContainer>
      <PaginationBottom>
        <Pagination page={page} />
      </PaginationBottom>
    </div>
  );
};

const ItemContainer = styled.div`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
const Top = styled.div`
  max-width: 1096px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Panel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
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
const Sort = styled.div`
  display: flex;
  align-items: center;
`;
const SortText = styled.div`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  margin-right: 26px;
`;
const SortTabs = styled.div`
  display: flex;
  align-items: center;
  input[type='radio'] {
    display: none;
  }
  label {
    background: transparent;
    font-size: 12px;
    line-height: 150%;
    font-family: 'Rubik', sans-serif;
    color: #122434;
    margin-right: 22px;
    cursor: pointer;
    padding-bottom: 2px;
    &:first-child {
      margin-left: 26px;
    }
  }
  input[type='radio']:checked + label {
    border-bottom: 2px solid #2baee0;
  }
`;
const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 26px;
`;
const Category = styled.div`
  border: 1px solid #caf0ff;
  border-radius: 6px;
  padding: 6px 10px;
  margin: 0 4px;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`;

export default SearchList;
