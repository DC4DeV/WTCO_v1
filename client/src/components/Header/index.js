/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants
import Logo from 'src/components/Header/Logo';
import Nav from 'src/components/Header/Nav';

// Styles et assets
import './header.sass';

/**
 * Code
 */
const Header = () => (
  <header id="header">
    <Logo />
    <Nav />
  </header>
);

/**
 * Export
 */
export default Header;
