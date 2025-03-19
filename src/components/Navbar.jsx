import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const ToggleButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <Nav>
      <StyledLink to="/">FEG</StyledLink>
      <NavLinks>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/features">Features</StyledLink>
        <StyledLink to="/about">About</StyledLink>
      </NavLinks>
      <ToggleButton onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </ToggleButton>
    </Nav>
  );
}

export default Navbar;