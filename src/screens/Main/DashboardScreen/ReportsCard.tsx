import React from "react";
import styled from "styled-components";
import { Subtitle } from "../../../ui/Subtitle";
import { Text } from "../../../ui/Text";

const ReportsCard = () => {
  return (
    <Card>
      <Data>
        <Block>
          <Subtitle mb="16">Search Sessions</Subtitle>
          <DataItem>
            <Text mb="8">Total</Text>
            <DataValue>230</DataValue>
          </DataItem>
        </Block>
        <Block>
          <Subtitle mb="16">Sent Pitches</Subtitle>
          <DataItem>
            <Text mb="8">Company</Text>
            <DataValue>72</DataValue>
          </DataItem>
        </Block>
      </Data>
      <Subtitle mb="16">Top Matched</Subtitle>
      <Flex>
        <CompanyBox>Logo</CompanyBox>
        <CompanyBox>Logo</CompanyBox>
        <CompanyBox>Logo</CompanyBox>
      </Flex>
      <Subtitle mb="16">Last Login</Subtitle>
      <User>
        <Ava></Ava>
        <Info>
          <TextBold>Frank Lampard</TextBold>
          <Text>12 Aug 2020</Text>
        </Info>
      </User>
      <User>
        <Ava></Ava>
        <Info>
          <TextBold>Frank Lampard</TextBold>
          <Text>12 Aug 2020</Text>
        </Info>
      </User>
    </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  border-radius: 6px;
  padding: 24px;
  width: 536px;
  height: 498px;
`;
const Data = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:first-child {
    margin-right: 18px;
  }
`;
const DataItem = styled.div`
  background: #f9f9f9;
  border-radius: 4px;
  padding: 4px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const DataValue = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
`;
const Flex = styled.div`
  display: flex;
  margin-bottom: 24px;
`;
const CompanyBox = styled.div`
  width: 83px;
  height: 83px;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;
const User = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;

const Ava = styled.div`
  width: 100%;
  max-width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #032342;
`;
const Info = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #eeeeee;
  }
`;
const TextBold = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  margin-bottom: 4px;
`;

export default ReportsCard;
