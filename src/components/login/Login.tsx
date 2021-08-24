import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import * as Types from '../../types/types';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/icons/authLogo.svg';
import eyeoff from '../../assets/icons/eye-off.svg';
import authBg from '../../assets/images/authBg.jpg';
import { NavLink } from 'react-router-dom';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const onSubmit = (values: any) => {
    if (values) {
      /* setJoined(true); */
    }
  };

  const required = (value: string) => (value ? undefined : 'Введите имя');

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Welcome to Accelerist</FormTitle>
          <Tabs>
            <Tab to="/registration">Register</Tab>
            <TabActive to="/login">Login</TabActive>
          </Tabs>
          <Inputs>
            <label>Email</label>
            <Field
              name="Email"
              validate={required}
              render={({ input, meta }) => (
                <InputContainer>
                  <Input {...input} type="email" placeholder="Enter email" />
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            />
            <label>Password</label>
            <Field
              name="Password"
              validate={required}
              render={({ input, meta }) => (
                <InputContainer>
                  <Input
                    {...input}
                    type="password"
                    placeholder="Enter password"
                  />
                  <Eye>
                    <ReactSVG src={eyeoff} />
                  </Eye>
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            />
          </Inputs>
          <AythBtn type="submit" disabled={!values.password || !values.email}>
            Registration
          </AythBtn>
        </FormContainer>
      )}
    />
  );
};

const FormContainer = styled.form`
  max-width: 454px;
  padding: 40px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  position: relative;
  label {
    font-size: 12px;
    line-height: 150%;
    color: #737373;
  }
`;
const Tabs = styled.div`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  margin-bottom: 34px;
`;
const Tab = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  background: transparent;
  border-radius: 6px;
  padding: 9px 0;
  width: 183px;
  height: 36px;
  cursor: pointer;
  color: #737373;
  font-size: 12px;
  line-height: 150%;
`;
const TabActive = styled(Tab)`
  background: #caf0ff;
  color: #122434;
`;
const FormTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
  margin-bottom: 27px;
`;
const Inputs = styled.div`
  margin-bottom: 40px;
`;
const InputContainer = styled.div`
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  padding: 10px 30px 10px 16px;
  outline: none;
  font-size: 16px;
  line-height: 155%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  margin-top: 4px;
  &:first-child {
    margin-bottom: 24px;
  }
`;
const Eye = styled.button`
  background: transparent;
  position: absolute;
  top: 13px;
  right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const AythBtn = styled.button`
  padding: 12px 0;
  outline: none;
  cursor: pointer;
  background: #2baee0;
  border-radius: 6px;
  color: white;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  transition: 0.3s;
`;

const Error = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 100%;
  height: 30px;
  color: red;
`;
export default Login;
