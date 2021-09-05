import React from 'react';
import styled, { css } from 'styled-components';
import Navbar from '../navbar';
import SearchInput from '../searchInput';
import { Wrapper } from '../../ui/Wrapper';
import MenuRight from './MenuRight';
import LogoMain from '../../assets/icons/LogoMain';

interface BoardProps {}
const Header: React.FC<BoardProps> = ({}) => {
  const [menuActive, setMenuActive] = React.useState<boolean>(false);
  return (
    <HeaderContainer>
      <Wrapper containerStyled={StyldedWrapper}>
        <NavBlock>
          <HeaderLogo>
            <LogoMain />
          </HeaderLogo>
          <MobileHeaderLogo>
            <LogoMain height={24} width={106} />
          </MobileHeaderLogo>
          <Navbar setMenuActive={setMenuActive} />
        </NavBlock>
        <NavBlock>
          <SearchInput />
          <HeaderBurger
            menuActive={menuActive}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </HeaderBurger>
          <MenuRight menuActive={menuActive} setMenuActive={setMenuActive} />
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
  @media (max-width: 525px) {
    height: 74px;
  }
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
  @media (max-width: 525px) {
    display: none;
  }
`;
const MobileHeaderLogo = styled.div`
  margin-right: 50px;
  display: none;
  @media (max-width: 525px) {
    display: block;
  }
`;
type HeaderBurgerProps = {
  menuActive: boolean;
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
    background-color: ${({ menuActive }) =>
      menuActive ? '#737373' : '#122434'};
    display: block;
    position: absolute;
    transition: all 0.3s ease 0s;
    border-radius: 1px;
    &:first-child {
      right: 0;
      top: ${({ menuActive }) => (menuActive ? ' 7px' : '0')};
      transform: ${({ menuActive }) => (menuActive ? 'rotate(45deg)' : 'none')};
    }
    &:nth-child(2) {
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: ${({ menuActive }) => (menuActive ? '0' : '1')};
    }
    &:last-child {
      right: 0;
      bottom: ${({ menuActive }) => (menuActive ? ' 7px' : '0')};
      transform: ${({ menuActive }) =>
        menuActive ? 'rotate(-45deg)' : 'none'};
    }
  }
  @media (max-width: 1110px) {
    display: block;
  }
`;

export default Header;
