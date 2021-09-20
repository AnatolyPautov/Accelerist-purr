import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../ui/Title';
import { Wrapper } from '../../../ui/Wrapper';
import FavoritesCard from './FavoritesCard';
import ReportsCard from './ReportsCard';
import { useSelector } from 'react-redux';
import { getFavoritesState, getProspectsState } from '../../../store/store';
import Spinner from '../../../ui/Spinner';
import ProspectCard from '../../../components/prospectCard';

interface Props {}
const DashboardScreen: React.FC<Props> = ({}) => {
  const favorites = useSelector(getFavoritesState);
  const prospects = useSelector(getProspectsState);

  if (prospects.loading) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <Container>
        {prospects.prospects.length !== 0 && (
          <div>
            <SpaceBetween>
              <Title mb="16">Prospects</Title>
              <StyledLink to="/prospects">see more</StyledLink>
            </SpaceBetween>
            <Flex>
              <ProspectCard
                item={prospects.prospects[prospects.prospects.length - 1]}
              />
              <ProspectCard
                item={prospects.prospects[prospects.prospects.length - 2]}
              />
            </Flex>
          </div>
        )}
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
  margin-bottom: 16px;
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
  &:hover {
    text-decoration: underline;
  }
`;

const Block = styled.div`
  width: 536px;
  &:first-child {
    margin-right: 24px;
  }
`;

export default DashboardScreen;
