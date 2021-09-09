import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface Props {
  mb?: string;
}

export const Title: FC<Props> = ({ children, mb }) => {
  return <StyledText $mb={mb}>{children}</StyledText>;
};

const StyledText = styled.h2<{ $mb?: CSSProp }>`
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  color: ${({ theme }) => theme.colors.black};
  margin-right: 11px;
  margin-bottom: ${(props) => props.$mb + 'px'};
`;
