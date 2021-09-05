import React from 'react';
import styled from 'styled-components';
import { Row } from '../../ui/Row';
import SearchInput from '../searchInput';
import prev from '../../assets/icons/arrow-left.svg';
import { ReactSVG } from 'react-svg';
import { useHistory } from 'react-router-dom';
import { Text } from '../../ui/Text';
import { css } from 'styled-components';
import MailIcon from '../../assets/icons/MailIcon';
import { Wrapper } from '../../ui/Wrapper';

interface SearchListProps {
  name?: string;
}
const PageHeader: React.FC<SearchListProps> = ({ name }) => {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        {name === 'company' ? (
          <Row containerStyled={RowWidth}>
            <PrevArrow onClick={() => history.goBack()}>
              <ReactSVG src={prev} />
            </PrevArrow>
            <SearchBlock>
              <SearchTitle>Corparate Profile</SearchTitle>
              <Support onClick={() => null}>
                <MailIcon />
                <Text containerStyled={TextMargin}>Accelerist Support</Text>
              </Support>
            </SearchBlock>
          </Row>
        ) : (
          <SearchHeader>
            <SearchTitle>Search</SearchTitle>
            <SearchInput
              width="715"
              background="#F1F4F5"
              searchList="searchList"
            />
          </SearchHeader>
        )}
      </Wrapper>
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
const RowWidth = css`
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
const SearchBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TextMargin = css`
  margin-left: 10px;
`;
const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 525px) {
    display: block;
  }
`;
export default PageHeader;
