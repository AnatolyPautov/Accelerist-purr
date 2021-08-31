import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import heart from '../../assets/icons/heart.svg';
import heartLike from '../../assets/icons/heart-like.svg';

interface CompanyItemProps {
  company: any;
}
const CompanyItem: React.FC<CompanyItemProps> = ({ company }) => {
  const { country, city, state, street, zipCode, revenue } = company;
  const address = street + '. ' + city + ', ' + state + ' ' + zipCode;

  const rev = (revenue: string) => {
    let parts = revenue.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join(',');
  };

  return (
    <Company>
      <LogoRanking>
        <Logo>Logo</Logo>
        <Ranking>
          <GrayText>Priority Ranking</GrayText>
          <p>{company.score}</p>
        </Ranking>
      </LogoRanking>
      <div>
        <Title>{company.name}</Title>
        <GrayTextMB>
          {address.length > 42 ? address.substring(0, 45) + '...' : address}
        </GrayTextMB>
        <GrayText>{company.fax || 'the phone number is missing'}</GrayText>
        <Data>
          <CSRFocusBlock>
            <GrayTextMB>CSR Focus</GrayTextMB>
            <Categories>
              <Category>Health</Category>
              <Category>Animals</Category>
              <Category>Education</Category>
            </Categories>
          </CSRFocusBlock>
          <RevenueBlock>
            <GrayTextMB>Revenue</GrayTextMB>
            <Revenue>
              ${' '}
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
          <LinkBtn>Profile</LinkBtn>
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
const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  margin-bottom: 12px;
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
  display: flex;
  justify-content: space-between;
`;
const Revenue = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  white-space: nowrap;
`;
const Category = styled(Revenue)`
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
  background-color: white;
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
const LinkBtn = styled.button`
  padding: 10px;
  border: 1px solid #2baee0;
  border-radius: 6px;
  cursor: pointer;
  background: white;
  width: 100%;
  transition: 0.2s;
  outline: none;
  &:hover {
    background: #ebf9ff;
    color: #2baee0;
  }
  &:focus {
    background: #caf0ff;
    color: #2baee0;
  }
`;
const GrayText = styled.p`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
`;
const GrayTextMB = styled(GrayText)`
  margin-bottom: 4px;
`;

export default CompanyItem;
