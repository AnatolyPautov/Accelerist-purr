import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/icons/logo.svg';
import Navbar from '../navbar';
import SearchInput from '../searchInput';

interface BoardProps {}
const Header: React.FC<BoardProps> = ({}) => {
  return (
    <HeaderContainer>
      <Wrapper>
        <NavBlock>
          <HeaderLogo>
            <ReactSVG src={logo} />
          </HeaderLogo>
          <Navbar />
        </NavBlock>
        <NavBlock>
          <SearchInput />
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
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
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

export default Header;
