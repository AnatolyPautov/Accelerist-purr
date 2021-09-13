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
import SearchList from './searchScreen/SearchList';
import DashboardScreen from './dashboardScreen';
interface LoginProps {}

const Main: React.FC<LoginProps> = ({}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(addCompanies({ page: 1, limit: 12 }));
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/dashboard">
          <PageHeader />
          <DashboardScreen />
        </Route>
        <Route exact path="/audience">
          <PageHeader name="search" />
          <SearchScreen />
        </Route>
        <Route path="/audience/:number">
          <PageHeader name="company" />
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
