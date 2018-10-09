import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.sass';
import ford from '../../../images/ford.png';

const NavbarSocial = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bodySocial">
    <NavLink exact to="/"><img src={ford} width="30" height="30" alt="Ford" /></NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item linkSocial">
          <NavLink exact to="/social">Accueil social</NavLink>
        </li>
        <li className="nav-item linkSocial">
          <NavLink exact to="/social/profil">Mon profil</NavLink>
        </li>
        <li className="nav-item linkSocial">
          <NavLink exact to="/social/messagerie">Messagerie</NavLink>
        </li>
        <li className="nav-item linkSocial">
          <NavLink exact to="/social/entreprise">Mon entreprise</NavLink>
        </li>
        <li className="nav-item linkSocial">
          <NavLink exact to="/social/blog">Blog</NavLink>
        </li>
        <li className="nav-item linkSocial">
          <NavLink exact to="/social/chat">Chat</NavLink>
        </li>
        <li className="nav-item linkSocial">
          <NavLink exact to="/social/map">Carte</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavbarSocial;
