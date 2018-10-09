/**
 * Import
 */
import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

/**
 * Local import
 */
// Composants

// Styles et assets
import './nav.sass';

/**
 * Code
 */
const Nav = () => (
  <nav id="nav" className="navbar navbar-expand-md">
    <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      MENU
    </button>
    <ul id="navbarNav" className="collapse navbar-collapse navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/compagny/missions">Activité</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/compagny/vehicles">Véhicules</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/compagny/drivers">Chauffeurs</NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Messages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Carte</a>
      </li>
    </ul>
  </nav>
);

/**
 * Export
 */
export default withRouter(Nav);
