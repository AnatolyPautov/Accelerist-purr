import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface AppTextProps {
  mb?: string;
}

export const Subtitle: FC<AppTextProps> = ({ children, mb }) => {
  return <StyledText $mb={mb}>{children}</StyledText>;
};

const StyledText = styled.h3<{ $mb?: CSSProp }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #122434;
  margin-bottom: ${(props) => props.$mb + 'px'};
`;
