import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Title } from '../../../ui/Title';
import { Wrapper } from '../../../ui/Wrapper';
import FavoritesCard from './FavoritesCard';
import ReportsCard from './ReportsCard';
import { useSelector } from 'react-redux';
import { getFavoritesState, getProspectsState } from '../../../store/store';
import ProspectCard from '../../../components/prospectCard';
import { ReactSVG } from 'react-svg';
import emptyHeart from '../../../assets/icons/heart-favorite.svg';
import { Subtitle } from '../../../ui/Subtitle';
import { Text } from '../../../ui/Text';
import { Loader } from '../../../ui/Loader';
import { ButtonNow } from '../../../ui/ButtonNow';
import { useHistory } from 'react-router';

interface Props {}
const DashboardScreen: React.FC<Props> = ({}) => {
  const favorites = useSelector(getFavoritesState);
  const prospects = useSelector(getProspectsState);

  const history = useHistory();

  if (prospects.loading) {
    return <Loader size="big" variant="secondary" />;
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
              {prospects.prospects.map(
                (item, index) =>
                  index < 2 && <ProspectCard item={item} key={index} />
              )}
            </Flex>
          </div>
        )}
        <Flex>
          <Block>
            <SpaceBetween>
              <Title>Favorites</Title>
              <StyledLink to="/favorites">see more</StyledLink>
            </SpaceBetween>
            {favorites.favorites.length !== 0 ? (
              <Flex>
                {favorites.favorites.map(
                  (company, index) =>
                    index < 6 && <FavoritesCard company={company} key={index} />
                )}
              </Flex>
            ) : (
              <FavoriteEmpty>
                <ReactSVG src={emptyHeart} />
                <Subtitle mb="8">No favorite company</Subtitle>
                <Text color="#BFBFBF" mb="32">
                  Go to the search page and add to favorites
                </Text>
                <ButtonNow onClick={() => history.push(`/audience`)}>
                  Search
                </ButtonNow>
              </FavoriteEmpty>
            )}
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
const FavoriteEmpty = styled(Block)`
  background: white;
  border-radius: 6px;
  height: 498px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    margin-top: 40px;
  }
`;
export default DashboardScreen;
