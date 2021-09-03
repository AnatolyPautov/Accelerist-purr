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

interface SearchListProps {
  name?: string;
}
const PageHeader: React.FC<SearchListProps> = ({ name }) => {
  const history = useHistory();
  return (
    <SearchHeader>
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
          <Row>
            <SearchTitle>Search</SearchTitle>
            <SearchInput width="715" background="#F1F4F5" setting="setting" />
          </Row>
        )}
      </Wrapper>
    </SearchHeader>
  );
};

const SearchHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 96px;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const SearchTitle = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 150%;
  color: #122434;
  margin-right: 82px;
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

export default PageHeader;
