import React from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { ReactSVG } from 'react-svg';
import eyeoff from '../assets/icons/eye-off.svg';
import eye from '../assets/icons/eye.svg';

export interface AuthInput extends FieldRenderProps<string> {}

const InputField: React.FC<AuthInput> = ({ input, meta, ...props }) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(true);

  return (
    <InputContainer>
      {input.type === 'email' ? (
        <Input
          {...props}
          onBlur={(event) => input.onBlur(event)}
          onChange={input.onChange}
          value={input.value}
          hasError={meta.error && meta.touched}
          type={input.type}
        />
      ) : (
        <div>
          <Input
            {...props}
            onBlur={(event) => input.onBlur(event)}
            onChange={input.onChange}
            value={input.value}
            hasError={meta.error && meta.touched}
            type={showPassword ? 'password' : 'text'}
          />
          <Eye type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <ReactSVG src={eyeoff} /> : <ReactSVG src={eye} />}
          </Eye>
        </div>
      )}
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
`;
type InputProps = {
  hasError?: boolean;
  type?: string;
};
const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 10px 30px 10px 16px;
  outline: none;
  font-size: 16px;
  line-height: 155%;
  border: 1px solid ${({ hasError }) => (hasError ? '#F05658' : '#e8e8e8')};
  background: ${({ hasError }) => (hasError ? '#FFF2F2' : 'transparent')};
  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: ${({ type }) => (type === 'email' ? '24px' : '0')};
  &:focus {
    border: 1px solid ${({ hasError }) => (hasError ? '#F05658' : '#2baee0')};
  }
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
const Eye = styled.button`
  background: transparent;
  position: absolute;
  top: 13px;
  right: 16px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export default InputField;
