import React from 'react';
import styled from 'styled-components';
import { Text } from '../../../ui/Text';
import * as Types from '../../../types/types';

interface Props {
  company: Types.Company;
}
const FavoritesCard: React.FC<Props> = ({ company }) => {
  return (
    <Card>
      <CompanyAva>
        <Ava></Ava>
        <div>
          <Text>{company.name}</Text>
          <Text>Priority Ranking 12</Text>
        </div>
      </CompanyAva>
      <Text mb="4">CSR Focus</Text>
      <TextBold>No information</TextBold>
    </Card>
  );
};

const Card = styled.div`
  width: 256px;
  height: 156px;
  background: #ffffff;
  border-radius: 6px;
  padding: 24px;
  margin-bottom: 15px;
  &:nth-child(2n + 1) {
    margin-right: 24px;
  }
`;
const CompanyAva = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const Ava = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;
const TextBold = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
`;
export default FavoritesCard;
