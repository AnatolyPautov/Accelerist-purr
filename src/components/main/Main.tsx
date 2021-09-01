import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';
import Header from '../header';
import PageHeader from '../pageHeader';
import { Switch } from 'react-router-dom';
import SearchList from '../searchList';
import CompanyPage from '../companyPage';
import { useAppDispatch } from '../../store/store';
import { addCompanies } from '../../store/companySlice';
interface LoginProps {}

const Main: React.FC<LoginProps> = ({}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(addCompanies({ page: 1, limit: 10 }));
  }, [dispatch]);
  return (
    <Container>
      <Header />
      <PageHeader />
      <Wrapper>
        <Switch>
          <Route exact path="/dashboard" component={SearchList} />
          <Route path="/dashboard/:number" component={CompanyPage} />
        </Switch>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1200px;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export default Main;
