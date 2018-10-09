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
import './drivers.sass';

/**
 * Code
 */
const Nav = id => (
  <ul className="driver-buttons">
    <li>
      <NavLink className="navlink" to={`/compagny/drivers/${id.id}`}>Profile</NavLink>
    </li>
    <li>
      <NavLink className="navlink" to={`/compagny/drivers/${id.id}/vehicles`}>Véhicules</NavLink>
    </li>
    <li>
      <NavLink className="navlink" to={`/compagny/drivers/${id.id}/missions`}>Missions</NavLink>
    </li>
  </ul>
);

/**
 * Export
 */
export default withRouter(Nav);
