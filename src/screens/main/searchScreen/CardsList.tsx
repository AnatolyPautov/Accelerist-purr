import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getCompaniesState, useAppDispatch } from '../../../store/store';
import CompanyCard from '../../../components/companyCard';
import UploadIcon from '../../../assets/icons/UploadIcon';
import MailIcon from '../../../assets/icons/MailIcon';
import FolderPlusIcon from '../../../assets/icons/FolderPlusIcon';
import Pagination from '../../../components/pagination/Pagination';
import { Subtitle } from '../../../ui/Subtitle';
import { createProspect } from '../../../store/prospectsSlice';
import { Text } from '../../../ui/Text';
import ModalLike from '../../../modals/ModalLike';

interface BoardProps {
  page?: string;
}
const SearchList: React.FC<BoardProps> = ({ page }) => {
  const [likeModal, setLikeModal] = React.useState<boolean>(false);
  const companies = useSelector(getCompaniesState);

  const dispatch = useAppDispatch();

  const Ref = React.useRef<any>(null);
  React.useEffect(() => {
    Ref.current.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);
  const renderTop = () => {
    if (page === 'prospect') {
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
      {likeModal && <ModalLike />}
      <Top>
        {renderTop()}
        <PaginationTop>
          <Pagination page={page} />
        </PaginationTop>
      </Top>
      <ItemContainer>
        {companies.companies.map((company, index) => (
          <CompanyCard company={company} key={index} />
        ))}
      </ItemContainer>
      <PaginationBottom>
        <Pagination page={page} />
      </PaginationBottom>
    </div>
  );
};

const Top = styled.div`
  max-width: 1096px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ItemContainer = styled.div`
  margin-top: 27px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
const Filters = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 29px;
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
