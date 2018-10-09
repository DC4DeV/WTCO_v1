/**
 * Import
 */
import React from 'react';
import { withRouter, Link } from 'react-router-dom';

/**
 * Local import
 */
// Composants

// Styles et assets
import './logo.sass';
import logo from 'src/images/ford.png';

/**
 * Code
 */
const Logo = () => (
  <div id="logo">
    <Link to="/compagny/home">
      <img src={logo} alt="Logo de l'entreprise" />
    </Link>
  </div>
);

/**
 * Export
 */
export default withRouter(Logo);
