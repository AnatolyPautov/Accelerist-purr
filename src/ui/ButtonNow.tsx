import React, { DOMAttributes, FC } from 'react';
import styled from 'styled-components';
import { Loader } from './Loader';

interface Props extends DOMAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  disabled?: any;
  variant?: 'first' | 'like';
}

export const ButtonNow: FC<Props> = ({
  children,
  isLoading,
  variant = 'first',
  ...all
}) => {
  return (
    <StyledButton variant={variant} {...all}>
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  variant?: string;
}
const StyledButton = styled.button<StyledButtonProps>`
  background: white;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  outline: none;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'first':
        return `
        padding: 10px;
        width: 244px;
        font-size: 12px;
        line-height: 150%;
        border: 1px solid #2baee0;
        color: ${theme.colors.black};
      `;
      case 'like':
        return `
        margin-right: 8px;
        border: 1px solid #e8e8e8;
        padding: 9px 9px 6px 9px;
      `;
    }
  }}
  &:hover {
    ${({ variant, theme }) => {
      switch (variant) {
        case 'first':
          return ` 
          background: #ebf9ff;
          color: #2baee0;`;
        case 'like':
          return `
          border: 1px solid #bfbfbf;
          `;
      }
    }}
  }
  &:focus {
    ${({ variant, theme }) => {
      switch (variant) {
        case 'first':
          return `
          background: #caf0ff;
          color: #2baee0;`;
        case 'like':
          return `
          border: 1px solid #f05658;;
        `;
      }
    }}
  }
`;
