import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/icons/authLogo.svg';
import authBg from '../../assets/images/authBg.jpg';
import { Route } from 'react-router';
import Registration from '../registration';
import Login from '../login';
interface LoginProps {}

const Auth: React.FC<LoginProps> = ({}) => {
  return (
    <>
      <AuthContainer>
        <AuthHeader>
          <ReactSVG src={logo} />
        </AuthHeader>
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/login" render={() => <Login />} />
      </AuthContainer>
    </>
  );
};

const AuthHeader = styled.div`
  background: #122434;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 73px;
`;

const AuthContainer = styled.div`
  padding-bottom: 73px;
  background: no-repeat url(${authBg});
  background-size: cover;
  background-position: center;
  min-height: calc(100% - 80px);
`;

export default Auth;
