import React, { FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface WrapperProps {
  containerStyled?: CSSProp;
}

export const Wrapper: FC<WrapperProps> = ({
  children,
  containerStyled = {},
}) => {
  return <StyledWrapper $CSS={containerStyled}>{children}</StyledWrapper>;
};

interface StyledRowProps {
  $CSS: CSSProp;
}

const StyledWrapper = styled.div<StyledRowProps>`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  ${({ $CSS }) => $CSS};
  @media (max-width: 1300px) {
    max-width: 1150px;
  }
  @media (max-width: 1170px) {
    max-width: 1000px;
  }
  @media (max-width: 1020px) {
    max-width: 800px;
  }
  @media (max-width: 820px) {
    max-width: 720px;
  }
  @media (max-width: 750px) {
    max-width: 600px;
  }
  @media (max-width: 620px) {
    max-width: 500px;
  }
  @media (max-width: 525px) {
    max-width: 400px;
  }
  @media (max-width: 420px) {
    max-width: 340px;
  }
`;
