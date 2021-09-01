import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import heart from '../../assets/icons/heart.svg';
import heartLike from '../../assets/icons/heart-like.svg';
import { Link } from 'react-router-dom';
import { Row } from '../../ui/Row';
import { Text } from '../../ui/Text';
import { Subtitle } from '../../ui/Subtitle';

interface CompanyItemProps {
  company: any;
}
const CompanyItem: React.FC<CompanyItemProps> = ({ company }) => {
  const { country, city, state, street, zipCode, revenue, id, fax, score } =
    company;
  const address = street + '. ' + city + ', ' + state + ' ' + zipCode;

  const rev = (revenue: string) => {
    if (revenue) {
      let parts = revenue.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join(',');
    } else {
      return '0';
    }
  };

  return (
    <Company>
      <LogoRanking>
        <Logo>Logo</Logo>
        <Ranking>
          <Text>Priority Ranking</Text>
          <p>{score}</p>
        </Ranking>
      </LogoRanking>
      <div>
        <Subtitle mb="12">{company.name}</Subtitle>
        <Text>
          {address.length > 42 ? address.substring(0, 45) + '...' : address}
        </Text>
        <Text>{fax || 'the phone number is missing'}</Text>
        <Data>
          <CSRFocusBlock>
            <Text>CSR Focus</Text>
            <Categories>
              <Category>Health</Category>
              <Category>Animals</Category>
              <Category>Education</Category>
            </Categories>
          </CSRFocusBlock>
          <RevenueBlock>
            <Text>Revenue</Text>
            <Revenue>
              {rev(revenue).length > 9
                ? rev(revenue).substring(0, 9) + '...'
                : rev(revenue)}
            </Revenue>
          </RevenueBlock>
        </Data>
        <Buttons>
          <LikeBtn>
            <ReactSVG src={company.like ? heartLike : heart} />
          </LikeBtn>
          <LinkBtn to={`/dashboard/${id}`}>Profile</LinkBtn>
        </Buttons>
      </div>
    </Company>
  );
};
const Company = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  width: 536px;
  padding: 26px 32px;
  border-radius: 6px;
  margin-bottom: 24px;
  &:nth-child(2n) {
    margin-left: 24px;
  }
`;
const LogoRanking = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  width: 168px;
  margin-right: 16px;
`;
const Logo = styled.div`
  height: 156px;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ranking = styled.div`
  padding-top: 8px;
  height: 59px;
  text-align: center;
`;
const Data = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
  margin: 28px 0 24px;
`;
const CSRFocusBlock = styled.div`
  padding: 0 5px 12px 0;
`;
const RevenueBlock = styled.div`
  padding: 0 0 12px 20px;
  border-left: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Categories = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
`;
const Revenue = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  white-space: nowrap;
  margin-top: 4px;
`;
const Category = styled(Revenue)`
  margin-top: 0;
  margin-right: 16px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LikeBtn = styled.button`
  padding: 9px 9px 6px 9px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  outline: none;
  &:hover {
    border: 1px solid #bfbfbf;
  }
  &:focus {
    border: 1px solid #f05658;
  }
`;
const LinkBtn = styled(Link)`
  padding: 10px;
  border: 1px solid #2baee0;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  transition: 0.2s;
  &:hover {
    background: #ebf9ff;
    color: #2baee0;
  }
  &:focus {
    background: #caf0ff;
    color: #2baee0;
  }
`;

export default CompanyItem;
