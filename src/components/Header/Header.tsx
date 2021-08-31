import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search-header.svg';
import Navbar from '../navbar';
import SearchInput from '../searchInput';
import { useAppDispatch } from '../../store/store';
import { addCompanies } from '../../store/companySlice';

interface BoardProps {}
const Header: React.FC<BoardProps> = ({}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(addCompanies({ page: 1, limit: 10 }));
  }, [dispatch]);

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

const HeaderContainer = styled.div`
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
