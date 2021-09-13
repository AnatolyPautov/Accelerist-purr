import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Text } from '../../../ui/Text';
import { Title } from '../../../ui/Title';
import { Wrapper } from '../../../ui/Wrapper';
import ProspectCard from './ProspectCard';
import FavoritesCard from './FavoritesCard';
import ReportsCard from './ReportsCard';

interface CompanyPageProps {}
const DashboardScreen: React.FC<CompanyPageProps> = ({}) => {
  return (
    <Wrapper>
      <Container>
        <SpaceBetween>
          <Title mb="16">Prospects</Title>
          <StyledLink to="/audience">see more</StyledLink>
        </SpaceBetween>
        <Flex>
          <ProspectCard />
          <ProspectCard />
        </Flex>
        <Flex>
          <Block>
            <SpaceBetween>
              <Title>Favorites</Title>
              <StyledLink to="/audience">see more</StyledLink>
            </SpaceBetween>
            <Flex>
              <FavoritesCard />
            </Flex>
          </Block>
          <Block>
            <SpaceBetween>
              <Title>Reports</Title>
            </SpaceBetween>
            <Flex>
              <ReportsCard />
            </Flex>
          </Block>
        </Flex>
      </Container>
    </Wrapper>
  );
};
const Container = styled.div`
  margin-top: 32px;
  padding-bottom: 60px;
  max-width: 1096px;
  border-radius: 6px;
  overflow: hidden;
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const StyledLink = styled(Link)`
  text-align: right;
  color: #2baee0;
`;

const Block = styled.div`
  width: 536px;
  &:first-child {
    margin-right: 24px;
  }
`;

export default DashboardScreen;
