import React from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';

export interface AuthInput extends FieldRenderProps<string> {}

const InputField: React.FC<AuthInput> = (props) => {
  return (
    <InputContainer>
      <Input
        {...props}
        onChange={props.input.onChange}
        value={props.input.value}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
`;
type InputProps = {};
const Input = styled.input<InputProps>`
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 10px 31px 10px 16px;
  outline: none;
`;

export default InputField;
