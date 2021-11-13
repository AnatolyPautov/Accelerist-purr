import React from "react";
import styled from "styled-components";
import { Form, Field, FormProps } from "react-final-form";
import { ReactSVG } from "react-svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import { NavLink } from "react-router-dom";
import { Tab } from "../../../ui/Tab";
import { useHistory } from "react-router";
import { CheckBox } from "../../../ui/Checkbox";
import { Text } from "../../../ui/Text";
import InputField from "../../../ui/InputField";
import { getUserState, useAppDispatch } from "../../../store/store";
import { signInRoutine } from "../../../store/userSlice";
import { useSelector } from "react-redux";

import {
  composeValidators,
  validateEmail,
  validateInput,
} from "../../../utils/validation/validate";
import { AuthButton } from "../../../ui/AuthButton";

const Login = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(getUserState);

  const onSubmit = (values: FormProps) => {
    dispatch(signInRoutine({ email: values.email, password: values.password }));
  };
  const history = useHistory();

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Welcome to Accelerist</FormTitle>
          <TabContainer>
            <Tab onClick={() => history.push("/signup")}>Register</Tab>
            <Tab active={true} onClick={() => history.push("/signin")}>
              Login
            </Tab>
          </TabContainer>
          <Inputs>
            <Text>Email</Text>
            <Field
              name="email"
              placeholder="Enter email"
              type="email"
              component={InputField}
              validate={composeValidators(validateInput, validateEmail)}
            />
            <Text>Password</Text>
            <Field
              name="password"
              placeholder="Enter password"
              type="password"
              component={InputField}
              validate={validateInput}
            />
          </Inputs>
          <PasswordActions>
            <Field name="remember" type="checkbox" render={CheckBox}>
              Remember
            </Field>
            <ForgotPassword to="/signup">Forgot Password?</ForgotPassword>
          </PasswordActions>
          <AuthButton
            disabled={!values.password || !values.email}
            isLoading={user.isLoading}
          >
            Login
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
  margin-bottom: 20px;
`;
const Desc = styled.p`
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #737373;
  margin-bottom: 16px;
`;
const PasswordActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
`;
const ForgotPassword = styled(NavLink)`
  color: #737373;
  text-decoration: none;
  font-size: 12px;
  line-height: 150%;
`;
const Linkedin = styled.div`
  display: flex;
  justify-content: center;
`;

export default Login;
