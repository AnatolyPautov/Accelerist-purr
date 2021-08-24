import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/audience">Audience</Link>
      </div>
      <div>
        <Link to="/pricing">Pricing</Link>
      </div>
      <div>
        <Link to="/prospecting">Prospecting</Link>
      </div>
      <div>
        <Link to="/roi">ROI</Link>
      </div>
      <div>
        <Link to="/upgrade">Upgrade Membership</Link>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Link = styled(NavLink)`
  font-size: 12px;
  line-height: 150%;
  color: #122434;
  text-decoration: none;
  margin-right: 28px;
`;

export default Navbar;
