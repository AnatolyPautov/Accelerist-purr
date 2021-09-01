import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface AppTextProps {
  containerStyled?: CSSProp;
}

export const GrayText: FC<AppTextProps> = ({
  children,
  containerStyled = {},
}) => {
  return <StyledText $CSS={containerStyled}>{children}</StyledText>;
};

const StyledText = styled.p<{ $CSS?: CSSProp }>`
  font-size: 12px;
  line-height: 150%;
  color: #737373;
  ${({ $CSS }) => $CSS};
`;
