import React from 'react';
import styled from 'styled-components';
import { Redirect, Route } from 'react-router';
import Header from '../../components/header';
import PageHeader from '../../components/pageHeader';
import { Switch } from 'react-router-dom';
import CompanyPage from './companyScreen';
import { useAppDispatch } from '../../store/store';
import SearchScreen from './searchScreen';
import DashboardScreen from './dashboardScreen';
import { addFavorites } from '../../store/favoritesSlice';
import { addProspects } from '../../store/prospectsSlice';
import ProspectsScreen from './prospectsScreen';
import FavoritesScreen from './favoritesScreen';
interface Props {}

const Main: React.FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(addFavorites({ page: 1, limit: 12 }));
    dispatch(addProspects({ page: 1, limit: 12 }));
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/dashboard">
          <PageHeader page="dashboard">Dashboard</PageHeader>
          <DashboardScreen />
        </Route>
        <Route exact path="/favorites">
          <PageHeader>Favorites</PageHeader>
          <FavoritesScreen />
        </Route>
        <Route exact path="/prospects">
          <PageHeader>Prospects</PageHeader>
          <ProspectsScreen />
        </Route>
        <Route path="/prospects/:number">
          <PageHeader page="prospect"></PageHeader>
          <SearchScreen page="prospect" />
        </Route>
        <Route exact path="/audience">
          <PageHeader page="search">Search</PageHeader>
          <SearchScreen />
        </Route>
        <Route path="/audience/:number">
          <PageHeader page="company">Corparate Profile</PageHeader>
          <CompanyPage />
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

export default Main;
