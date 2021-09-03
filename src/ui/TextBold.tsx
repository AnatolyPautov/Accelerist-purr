import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface AppTextProps {
  containerStyled?: CSSProp;
  color?: string;
  mb?: string;
}

export const TextBold: FC<AppTextProps> = ({
  children,
  containerStyled = {},
  color,
  mb,
}) => {
  return (
    <StyledText $mb={mb} $color={color} $CSS={containerStyled}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{
  $CSS?: CSSProp;
  $color?: CSSProp;
  $mb?: CSSProp;
}>`
  font-weight: 500;
  font-size: 24px;
  line-height: 148%;
  white-space: nowrap;
  color: ${(props) => props.$color || '#122434'};
  margin-bottom: ${(props) => props.$mb + 'px'};
  ${({ $CSS }) => $CSS};
`;
