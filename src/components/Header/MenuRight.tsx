import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from '../Navbar';
import Profile from './Profile';

interface BoardProps {
  menuActive: boolean;
  setMenuActive(menuActive: boolean): void;
}
const MenuRight: React.FC<BoardProps> = ({ menuActive, setMenuActive }) => {
  return (
    <Menu menuActive={menuActive}>
      <MenuBlock menuActive={menuActive}>
        <Navbar
          responsive={true}
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        />
        <Profile responsive={true} />
      </MenuBlock>
    </Menu>
  );
};

type MenuProps = {
  menuActive: boolean;
};
const Menu = styled.div<MenuProps>`
  opacity: ${({ menuActive }) => (menuActive ? '1' : '0')};
  visibility: ${({ menuActive }) => (menuActive ? 'visible' : 'hidden')};
  position: fixed;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
  overflow-y: auto;
  z-index: 99;
  transition: 0.3s;
`;
type MenuBlockProps = {
  menuActive: boolean;
};
const MenuBlock = styled.div<MenuBlockProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 100px 0 40px 40px;
  height: 100%;
  background: white;
  width: 330px;
  transform: ${({ menuActive }) =>
    menuActive ? ' translateX(0)' : 'translateX(100%)'};
  transition: 0.3s;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export default MenuRight;
