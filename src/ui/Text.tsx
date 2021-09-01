import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface AppTextProps {
  containerStyled?: CSSProp;
  color?: string;
}

export const Text: FC<AppTextProps> = ({
  children,
  containerStyled = {},
  color,
}) => {
  return (
    <StyledText $color={color} $CSS={containerStyled}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.p<{ $CSS?: CSSProp; $color?: CSSProp }>`
  font-size: 12px;
  line-height: 150%;
  color: ${(props) => props.$color || '#737373'};
  ${({ $CSS }) => $CSS};
`;
