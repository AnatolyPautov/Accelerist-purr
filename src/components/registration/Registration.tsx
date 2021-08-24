import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import * as Types from '../../types/types';
import { ReactSVG } from 'react-svg';
import linkedin from '../../assets/icons/linkedin.svg';
import eyeoff from '../../assets/icons/eye-off.svg';
import { NavLink } from 'react-router-dom';

interface LoginProps {}

const Registration: React.FC<LoginProps> = ({}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  const onSubmit = (values: any) => {
    if (values) {
      /* setJoined(true); */
    }
  };

  const required = (value: string) => (value ? undefined : 'Required');

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Welcome to Accelerist</FormTitle>
          <Tabs>
            <TabActive to="/registration">Register</TabActive>
            <Tab to="/login">Login</Tab>
          </Tabs>
          <Inputs>
            <label>Email</label>
            <Field
              name="email"
              validate={required}
              render={({ input, meta }) => (
                <InputContainer>
                  <Input
                    {...input}
                    meta={meta}
                    type="email"
                    placeholder="Enter email"
                  />
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            />
            <label>Password</label>
            <Field
              name="password"
              validate={required}
              render={({ input, meta }) => (
                <InputContainer>
                  <Input
                    {...input}
                    meta={meta}
                    type={showPassword ? 'password' : 'text'}
                    placeholder="Enter password"
                  />
                  <Eye onClick={() => setShowPassword(!showPassword)}>
                    <ReactSVG src={eyeoff} />
                  </Eye>
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            />
          </Inputs>
          <Desc>
            I agree that by clicking <strong>“Registration”</strong> I accept
            the Terms Of Service and Privacy Policy
          </Desc>
          <AythBtn type="submit" disabled={!values.password || !values.email}>
            Registration
          </AythBtn>
          <Desc>or continue with</Desc>
          <Linkedin>
            <ReactSVG src={linkedin} />
          </Linkedin>
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
type InputProps = {
  meta: any;
};
const Input = styled.input<InputProps>`
  width: 100%;
  padding: 10px 30px 10px 16px;
  outline: none;
  font-size: 16px;
  line-height: 155%;
  border: 1px solid
    ${({ meta }) => (meta.error && meta.touched ? '#F05658' : '#e8e8e8')};
  background: ${({ meta }) =>
    meta.error && meta.touched ? '#FFF2F2' : 'transparent'};
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
const Desc = styled.p`
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #737373;
  margin-bottom: 16px;
`;
type AythBtnProps = {
  disabled: boolean;
};
const AythBtn = styled.button<AythBtnProps>`
  margin-bottom: 32px;
  padding: 12px 0;
  outline: none;
  cursor: pointer;
  background: ${({ disabled }) =>
    disabled ? 'rgb(206, 237, 249)' : '#2baee0'};
  color: ${({ disabled }) => (disabled ? 'rgba(43, 174, 224, 0.3)' : 'white')};
  border-radius: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  transition: 0.3s;
  &:hover {
    background: ${({ disabled }) =>
      disabled ? 'rgb(206, 237, 249)' : '#51c2ee'};
  }
`;
const Linkedin = styled.div`
  display: flex;
  justify-content: center;
`;

const Error = styled.div`
  position: absolute;
  bottom: -7px;
  left: 0;
  width: 100%;
  height: 30px;
  color: red;
  font-size: 12px;
  line-height: 150%;
`;
export default Registration;
