import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
interface NavbarProps {
  responsive?: string;
  menuActive?: boolean;
}
const Navbar: React.FC<NavbarProps> = ({ responsive, menuActive }) => {
  return (
    <NavContainer responsive={responsive} menuActive={menuActive}>
      <StyledLink responsive={responsive} to="/dashboard">
        Dashboard
      </StyledLink>
      <StyledLink responsive={responsive} to="/audience">
        Audience
      </StyledLink>
      <StyledLink responsive={responsive} to="/pricing">
        Pricing
      </StyledLink>
      <StyledLink responsive={responsive} to="/prospecting">
        Prospecting
      </StyledLink>
      <StyledLink responsive={responsive} to="/roi">
        ROI
      </StyledLink>
      <StyledLink responsive={responsive} to="/upgrade">
        Upgrade Membership
      </StyledLink>
    </NavContainer>
  );
};
type NavContainerProps = {
  responsive?: string;
  menuActive?: boolean;
};
const NavContainer = styled.nav<NavContainerProps>`
  display: ${({ responsive }) => (responsive ? 'block' : 'flex')};
  align-items: center;
  justify-content: center;
  @media (max-width: 1110px) {
    display: ${({ menuActive }) => (menuActive ? 'block' : 'none')};
  }
`;
type StyledLinkProps = {
  responsive?: string;
};
const StyledLink = styled(NavLink)<StyledLinkProps>`
  display: block;
  font-size: ${({ responsive }) => (responsive ? '16px' : '12px')};
  line-height: ${({ responsive }) => (responsive ? '155%' : '150%')};
  color: #122434;
  text-decoration: none;
  margin-right: 28px;
  margin-bottom: ${({ responsive }) => (responsive ? '32px' : '0')};
  &.active {
    font-weight: 500;
  }
`;

export default Navbar;
