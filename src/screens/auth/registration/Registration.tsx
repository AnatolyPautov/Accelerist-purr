import React from 'react';
import styled from 'styled-components';
import { Form, Field, FormProps } from 'react-final-form';
import * as Types from '../../../types/types';
import { ReactSVG } from 'react-svg';
import linkedin from '../../../assets/icons/linkedin.svg';
import { Tab } from '../../../ui/Tab';
import { useHistory } from 'react-router';
import { Text } from '../../../ui/Text';
import InputField from '../../../ui/InputField';
import { signUpRoutine } from '../../../store/userSlice';
import { FormApi } from 'final-form';
import { getUserState, useAppDispatch } from '../../../store/store';
import {
  composeValidators,
  validateEmail,
  validateInput,
} from '../../../utils/validation/validate';
import { AuthButton } from '../../../ui/AuthButton';
import { useSelector } from 'react-redux';

interface LoginProps {}

const Registration: React.FC<LoginProps> = ({}) => {
  const dispatch = useAppDispatch();
  const user = useSelector(getUserState);

  const onSubmit = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(signUpRoutine({ email: values.email, password: values.password }));
  };

  const history = useHistory();
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Welcome to Accelerist</FormTitle>
          <TabContainer>
            <Tab active={true} onClick={() => history.push('/signup')}>
              Register
            </Tab>
            <Tab onClick={() => history.push('/signin')}>Login</Tab>
          </TabContainer>
          <Inputs>
            <Text>Email</Text>
            <Field
              name="email"
              validate={composeValidators(validateInput, validateEmail)}
              placeholder="Enter email"
              type="email"
              component={InputField}
            />
            <Text>Password</Text>
            <Field
              name="password"
              validate={validateInput}
              placeholder="Enter password"
              type="password"
              component={InputField}
            />
          </Inputs>
          <Desc>
            I agree that by clicking <strong>“Registration”</strong> I accept
            the Terms Of Service and Privacy Policy
          </Desc>
          <AuthButton
            disabled={!values.password || !values.email}
            isLoading={user.isLoading}
          >
            Registration
          </AuthButton>
          <Desc>or continue with</Desc>
          <Linkedin>
            <a href="https://ru.linkedin.com/">
              <ReactSVG src={linkedin} />
            </a>
          </Linkedin>
        </FormContainer>
      )}
    />
  );
};

const FormContainer = styled.form`
  width: 100%;
  max-width: 454px;
  padding: 40px;
  margin: 74px auto 40px;
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
  @media (max-width: 500px) {
    padding: 24px 16px 40px;
    margin: 20px 16px 40px;
  }
`;
const FormTitle = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: #122434;
  margin-bottom: 27px;
`;
const TabContainer = styled.div`
  display: flex;
  background: #f8f8f8;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  margin-bottom: 34px;
`;
const Inputs = styled.div`
  margin-bottom: 40px;
`;
const Desc = styled.p`
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #737373;
  margin-bottom: 16px;
`;
const Linkedin = styled.div`
  display: flex;
  justify-content: center;
`;

export default Registration;
