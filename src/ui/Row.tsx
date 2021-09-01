import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface RowProps {
  containerStyled?: CSSProp;
}

export const Row: FC<RowProps> = ({ children, containerStyled = {} }) => {
  return <StyledRow $CSS={containerStyled}>{children}</StyledRow>;
};

interface StyledRowProps {
  $CSS: CSSProp;
}

const StyledRow = styled.div<StyledRowProps>`
  display: flex;
  align-items: center;
  ${({ $CSS }) => $CSS};
`;
