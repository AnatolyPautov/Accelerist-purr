import React, { DOMAttributes, FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';
import { Loader } from './Loader';

interface Props extends DOMAttributes<HTMLButtonElement> {
  containerStyled?: CSSProp;
  search?: boolean;
  isLoading?: boolean;
  disabled?: any;
}

export const Button: FC<Props> = ({
  children,
  containerStyled = {},
  search,
  isLoading,
  ...all
}) => {
  return (
    <StyledButton
      {...all}
      type={search ? 'submit' : 'button'}
      $CSS={containerStyled}
      search={search}
    >
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  $CSS: CSSProp;
  search?: boolean;
}
const StyledButton = styled.button<StyledButtonProps>`
  height: 46px;
  border-radius: 6px;
  padding: 12px 24px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;
  width: 146px;
  border: 1px solid ${({ search }) => (search ? 'none' : '#e8e8e8')};
  background: ${({ search }) => (search ? '#2BAEE0' : 'transparent')};
  color: ${({ search }) => (search ? '#fff' : '#122434')};
  &:first-child {
    margin-right: 8px;
  }
  &:hover {
    border: 1px solid ${({ search }) => (search ? 'none' : '#BFBFBF')};
    background: ${({ search }) => (search ? '#51C2EE' : 'transparent')};
  }
  &:focus {
    border: 1px solid ${({ search }) => (search ? 'none' : '#2BAEE0')};
    background: ${({ search }) => (search ? '#1DA7DC' : 'transparent')};
  }
  ${({ $CSS }) => $CSS};
`;
