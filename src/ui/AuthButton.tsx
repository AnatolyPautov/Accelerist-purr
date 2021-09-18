import { DOMAttributes, FC } from 'react';
import styled from 'styled-components';
import { Loader } from './Loader';

interface Props extends DOMAttributes<HTMLButtonElement> {
  isLoading: boolean;
  disabled: boolean;
}

export const AuthButton: FC<Props> = ({
  children,
  isLoading,
  disabled,
  ...all
}) => {
  return (
    <StyledButton {...all} type="submit" disabled={disabled}>
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  disabled: boolean;
}
const StyledButton = styled.button<StyledButtonProps>`
  height: 46px;
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
