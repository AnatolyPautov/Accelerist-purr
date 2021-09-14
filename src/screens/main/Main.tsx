import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';
import Header from '../../components/header';
import PageHeader from '../../components/pageHeader';
import { Switch } from 'react-router-dom';
import CompanyPage from './companyScreen';
import { useAppDispatch } from '../../store/store';
import { addCompanies } from '../../store/companySlice';
import SearchScreen from './searchScreen';
import DashboardScreen from './dashboardScreen';
import { addFavorites } from '../../store/favoritesSlice';
interface LoginProps {}

const Main: React.FC<LoginProps> = ({}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(addCompanies({ page: 1, limit: 12 }));
    dispatch(addFavorites({ page: 1, limit: 12 }));
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/dashboard">
          <PageHeader>Dashboard</PageHeader>
          <DashboardScreen />
        </Route>
        <Route exact path="/favorites">
          <PageHeader>Favorites</PageHeader>
          <SearchScreen page="favorites" />
        </Route>
        <Route exact path="/audience">
          <PageHeader name="search">Search</PageHeader>
          <SearchScreen />
        </Route>
        <Route path="/audience/:number">
          <PageHeader name="company">Corparate Profile</PageHeader>
          <CompanyPage />
        </Route>
      </Switch>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

export default Main;
