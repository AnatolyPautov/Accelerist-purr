import React, { DOMAttributes, FC } from 'react';
import { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface Props extends DOMAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Tab: FC<Props> = ({ children, active, ...all }) => {
  return (
    <>
      {active ? (
        <TabActive type="button" {...all}>
          {children}
        </TabActive>
      ) : (
        <TabBtn type="button" {...all}>
          {children}
        </TabBtn>
      )}
    </>
  );
};

interface TabProps {
  active?: CSSProp;
}
const TabBtn = styled.button<TabProps>`
  text-align: center;
  text-decoration: none;
  background: transparent;
  border-radius: 6px;
  padding: 9px 0;
  margin: 0 2px;
  width: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
  line-height: 150%;
`;
const TabActive = styled(TabBtn)`
  background: ${({ theme }) => theme.colors.secondaryBlue};
  color: ${({ theme }) => theme.colors.black};
`;
