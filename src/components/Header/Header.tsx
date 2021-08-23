import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '../../icons/logo.svg';
import Navbar from '../Navbar';

interface BoardProps {}
const Header: React.FC<BoardProps> = ({}) => {
  return (
    <>
      <HeaderContainer>
        <Wrapper>
          <NavBlock>
            <HeaderLogo>
              <ReactSVG src={logo} />
            </HeaderLogo>
            <Navbar />
          </NavBlock>
          <NavBlock>
            <SearchInput type="text" placeholder="Search" />
          </NavBlock>
        </Wrapper>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background: rgb(213, 243, 255);
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const NavBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLogo = styled.div`
  margin-right: 50px;
`;
const SearchInput = styled.input`
  background: #f3fcff;
  border-radius: 6px;
  outline: none;
  border: none;
  height: 36px;
  padding: 9px 24px;
`;

export default Header;
