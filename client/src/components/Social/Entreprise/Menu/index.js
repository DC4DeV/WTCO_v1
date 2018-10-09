import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './menu.sass';

const Menu = () => (
  <div id="menu">
    <nav>
      <NavLink className="d-block mb-2" to="/social/entreprise/general">Annonces Générales</NavLink>
      <NavLink className="d-block mb-2" to="/social/entreprise/missions">Missions</NavLink>
      <NavLink className="d-block mb-2" to="/social/entreprise/messages">Messages</NavLink>
      <NavLink className="d-block mb-2" to="/social/entreprise/coworkers">Mes collègues</NavLink>
      <NavLink className="d-block mb-2" to="/social/entreprise/contacts">contacts</NavLink>
    </nav>
  </div>
);

export default withRouter(Menu);
