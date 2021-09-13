import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import * as Types from '../../../types/types';
import { ReactSVG } from 'react-svg';
import linkedin from '../../assets/icons/linkedin.svg';
import eyeoff from '../../assets/icons/eye-off.svg';
import eye from '../../assets/icons/eye.svg';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../../ui/Tab';
import { useHistory } from 'react-router';
import { CheckBox } from '../../../ui/Checkbox';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  const onSubmit = (values: any) => {
    if (values) {
      /* setJoined(true); */
    }
  };

  const required = (value: string) => (value ? undefined : 'Required');
  const history = useHistory();

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, values }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormTitle>Welcome to Accelerist</FormTitle>
          <TabContainer>
            <Tab onClick={() => history.push('/signup')}>Register</Tab>
            <Tab active={true} onClick={() => history.push('/login')}>
              Login
            </Tab>
          </TabContainer>
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
                    {showPassword ? (
                      <ReactSVG src={eyeoff} />
                    ) : (
                      <ReactSVG src={eye} />
                    )}
                  </Eye>
                  {meta.error && meta.touched && <Error>{meta.error}</Error>}
                </InputContainer>
              )}
            />
          </Inputs>
          <PasswordActions>
            <div></div>
            <Field name="remember" type="checkbox" render={CheckBox}>
              Remember
            </Field>
            <ForgotPassword to="/signup">Forgot Password?</ForgotPassword>
          </PasswordActions>
          <AythBtn type="submit" disabled={!values.password || !values.email}>
            Login
          </AythBtn>
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
const InputContainer = styled.div`
  position: relative;
`;
type InputProps = {
  meta: any;
  type: string;
};
const Input = styled.input<InputProps>`
  display: block;
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
  margin-bottom: ${({ type }) => (type === 'email' ? '24px' : '0')};
  &:focus {
    border: 1px solid
      ${({ meta }) => (meta.error && meta.touched ? '#F05658' : '#2baee0')};
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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

const Error = styled.div`
  position: absolute;
  bottom: -29px;
  left: 0;
  width: 100%;
  height: 30px;
  color: red;
  font-size: 12px;
  line-height: 150%;
`;
export default Login;
