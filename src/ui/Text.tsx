import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface AppTextProps {
  containerStyled?: CSSProp;
  color?: string;
  mb?: string;
}

export const Text: FC<AppTextProps> = ({
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
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.$color || '#737373'};
  margin-bottom: ${(props) => props.$mb + 'px'};
  ${({ $CSS }) => $CSS};
`;
