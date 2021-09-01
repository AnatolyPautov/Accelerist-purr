import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
      </div>
      <div>
        <StyledLink to="/audience">Audience</StyledLink>
      </div>
      <div>
        <StyledLink to="/pricing">Pricing</StyledLink>
      </div>
      <div>
        <StyledLink to="/prospecting">Prospecting</StyledLink>
      </div>
      <div>
        <StyledLink to="/roi">ROI</StyledLink>
      </div>
      <div>
        <StyledLink to="/upgrade">Upgrade Membership</StyledLink>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  text-decoration: none;
  margin-right: 28px;
`;

export default Navbar;
