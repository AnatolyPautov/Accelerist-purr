import React, { DOMAttributes, FC } from 'react';
import styled from 'styled-components';

interface Props extends DOMAttributes<HTMLButtonElement> {
  disabled?: any;
  variant?: 'first' | 'like' | 'second';
}

export const ButtonNow: FC<Props> = ({
  children,
  variant = 'first',
  ...all
}) => {
  return (
    <StyledButton variant={variant} {...all}>
      {children}
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
  font-size: 12px;
  line-height: 150%;
  ${({ variant, theme }) => {
    switch (variant) {
      case 'first':
        return `
        padding: 10px;
        width: 244px;
        height: 40px;
        border: 1px solid ${theme.colors.blue};
        color: ${theme.colors.black};
      `;
      case 'like':
        return `
        margin-right: 8px;
        border: 1px solid ${theme.colors.line};
        width: 40px;
        height: 40px;
      `;
      case 'second':
        return `
        color: white;
        background: #2BAEE0;
        width: 100%;
        height: 36px;
      `;
    }
  }}
  &:hover {
    ${({ variant, theme }) => {
      switch (variant) {
        case 'first':
          return ` 
          background: #ebf9ff;
          color: ${theme.colors.blue};
        `;
        case 'like':
          return `
          border: 1px solid ${theme.colors.gray};
        `;
        case 'second':
          return `
          background: #51c2ee;
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
          color: ${theme.colors.blue};`;
        case 'like':
          return `
          border: 1px solid #f05658;;
        `;
      }
    }}
  }
`;
