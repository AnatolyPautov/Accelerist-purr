import React from 'react';
import styled, { css } from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/icons/logo.svg';
import Navbar from '../navbar';
import SearchInput from '../searchInput';
import { Wrapper } from '../../ui/Wrapper';

interface BoardProps {}
const Header: React.FC<BoardProps> = ({}) => {
  const [menuActive, setMenuActive] = React.useState<boolean>(false);
  return (
    <HeaderContainer>
      <Wrapper containerStyled={StyldedWrapper}>
        <NavBlock>
          <HeaderLogo>
            <ReactSVG src={logo} />
          </HeaderLogo>
          <Navbar />
        </NavBlock>
        <NavBlock>
          <SearchInput />
          <HeaderBurger
            active={menuActive}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </HeaderBurger>
          {menuActive && (
            <NavbarResponsive>
              <NavbarBlock>
                <Navbar responsive={'responsive'} menuActive={menuActive} />
              </NavbarBlock>
            </NavbarResponsive>
          )}
        </NavBlock>
      </Wrapper>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: rgb(213, 243, 255);
`;
const StyldedWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const HeaderLogo = styled.div`
  margin-right: 50px;
`;
type HeaderBurgerProps = {
  active: boolean;
};
const HeaderBurger = styled.button<HeaderBurgerProps>`
  height: 16px;
  width: 18px;
  position: relative;
  display: none;
  cursor: pointer;
  background: transparent;
  z-index: 100;
  span {
    width: 100%;
    height: 2px;
    background-color: ${({ active }) => (active ? '#737373' : '#122434')};
    display: block;
    position: absolute;
    transition: all 0.3s ease 0s;
    border-radius: 1px;
    &:first-child {
      right: 0;
      top: ${({ active }) => (active ? ' 7px' : '0')};
      transform: ${({ active }) => (active ? 'rotate(45deg)' : 'none')};
    }
    &:nth-child(2) {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: ${({ active }) => (active ? '0' : '1')};
    }
    &:last-child {
      right: 0;
      bottom: ${({ active }) => (active ? ' 7px' : '0')};
      transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'none')};
    }
  }
  @media (max-width: 1110px) {
    display: block;
  }
`;
const NavbarResponsive = styled.div`
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
  /*   @media (max-width: 800px) {
    display: flex;
  } */
`;
const NavbarBlock = styled.div`
  padding: 100px 0 0 40px;
  height: 100%;
  background: white;
  width: 38%;
`;

export default Header;
