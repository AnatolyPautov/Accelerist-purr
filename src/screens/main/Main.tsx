import React from 'react';
import styled from 'styled-components';
import { Redirect, Route } from 'react-router';
import Header from '../../components/Header';
import PageHeader from '../../components/PageHeader';
import { Switch } from 'react-router-dom';
import CompanyPage from './CompanyScreen';
import SearchScreen from './SearchScreen';
import DashboardScreen from './DashboardScreen';
import ProspectsScreen from './ProspectsScreen';
import FavoritesScreen from './FavoritesScreen';
interface Props {}

const Main: React.FC<Props> = ({}) => {
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
