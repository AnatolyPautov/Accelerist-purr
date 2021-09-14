import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../ui/Title';
import { Wrapper } from '../../../ui/Wrapper';
import ProspectCard from './ProspectCard';
import FavoritesCard from './FavoritesCard';
import ReportsCard from './ReportsCard';
import { useSelector } from 'react-redux';
import { getFavoritesState } from '../../../store/store';

interface Props {}
const DashboardScreen: React.FC<Props> = ({}) => {
  const favorites = useSelector(getFavoritesState);
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
              <StyledLink to="/favorites">see more</StyledLink>
            </SpaceBetween>
            <Flex>
              {favorites.favorites.map(
                (company, index) =>
                  index < 6 && <FavoritesCard company={company} key={index} />
              )}
            </Flex>
          </Block>
          <Block>
            <SpaceBetween>
              <Title>Reports</Title>
            </SpaceBetween>
            <ReportsCard />
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
const StyledLink = styled(NavLink)`
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
