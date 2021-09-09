import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/icons/authLogo.svg';
import authBg from '../../assets/images/authBg.jpg';
import { Redirect, Route, Switch } from 'react-router';
import Registration from '../registration';
import Login from '../login';
interface LoginProps {}

const Auth: React.FC<LoginProps> = ({}) => {
  return (
    <Container>
      <AuthHeader>
        <ReactSVG src={logo} />
      </AuthHeader>
      <AuthContainer>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/signup" />} />
          <Route path="/signup" component={Registration} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const AuthHeader = styled.header`
  background: ${({ theme }) => theme.colors.black};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthContainer = styled.div`
  background: no-repeat url(${authBg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100% - 80px);
`;

export default Auth;
