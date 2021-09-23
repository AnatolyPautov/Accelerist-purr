import React from 'react';
import styled from 'styled-components';
import SearchInput from '../searchInput';
import prev from '../../assets/icons/arrow-left.svg';
import { ReactSVG } from 'react-svg';
import { useHistory } from 'react-router-dom';
import { Text } from '../../ui/Text';
import { css } from 'styled-components';
import MailIcon from '../../assets/icons/MailIcon';
import { Wrapper } from '../../ui/Wrapper';
import { getProspectsState, useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import EditIcon from '../../assets/icons/EditIcon';
import { removeProspect } from '../../store/prospectsSlice';

interface SearchListProps {
  page?: string;
}
const PageHeader: React.FC<SearchListProps> = ({ page, children }) => {
  const prospects = useSelector(getProspectsState);

  const dispatch = useAppDispatch();

  const history = useHistory();
  const renderHeader = () => {
    switch (page) {
      case 'company':
        return (
          <CompanyHeader>
            <PrevArrow onClick={() => history.goBack()}>
              <ReactSVG src={prev} />
            </PrevArrow>
            <SpaceBetween>
              <SearchTitle>{children}</SearchTitle>
              <Support onClick={() => null}>
                <MailIcon />
                <Text containerStyled={TextMargin}>Accelerist Support</Text>
              </Support>
            </SpaceBetween>
          </CompanyHeader>
        );
      case 'search':
        return (
          <Flex>
            <SearchTitle>{children}</SearchTitle>
            <SearchInput
              width="715"
              background="#F1F4F5"
              searchList="searchList"
            />
          </Flex>
        );
      case 'prospect':
        return (
          <CompanyHeader>
            <PrevArrow onClick={() => history.goBack()}>
              <ReactSVG src={prev} />
            </PrevArrow>
            <SpaceBetween>
              <SearchTitle>
                {prospects.currentProspect.name || 'Name'}
              </SearchTitle>
              <Buttons>
                <EditBtn>
                  <EditIcon />
                  <Text color="#122434" containerStyled={TextMargin}>
                    Edit
                  </Text>
                </EditBtn>
                <DeleteBtn
                  onClick={() =>
                    dispatch(removeProspect(prospects.currentProspect.id))
                  }
                >
                  Delete
                </DeleteBtn>
              </Buttons>
            </SpaceBetween>
          </CompanyHeader>
        );
      default:
        return (
          <Flex>
            {page !== 'dashboard' && (
              <PrevArrow onClick={() => history.goBack()}>
                <ReactSVG src={prev} />
              </PrevArrow>
            )}
            <SearchTitle>{children}</SearchTitle>
          </Flex>
        );
    }
  };
  return (
    <Container>
      <Wrapper>{renderHeader()}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background-color: white;
  @media (max-width: 525px) {
    background-color: transparent;
    height: auto;
  }
`;
const SearchTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: #122434;
  margin-right: 82px;
  @media (max-width: 525px) {
    font-size: 16px;
    line-height: 145%;
    margin: 16px 0 8px;
  }
`;
const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1096px;
`;
const PrevArrow = styled.button`
  background: transparent;
  cursor: pointer;
  margin-top: 3px;
  margin-right: 12px;
`;
const Support = styled(PrevArrow)`
  margin: 0;
  display: flex;
  align-items: center;
`;
const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 525px) {
    display: block;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
const EditBtn = styled.button`
  outline: none;
  width: 82px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #caf0ff;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 8px;
  &:hover,
  &:focus {
    border: 1px solid #2baee0;
  }
`;
const DeleteBtn = styled(EditBtn)`
  border: none;
  background: #fffafa;
  color: #f05658;
  margin-right: 0;
  &:hover,
  &:focus {
    border: 1px solid #f05658;
  }
`;
const TextMargin = css`
  margin-left: 10px;
`;
export default PageHeader;
