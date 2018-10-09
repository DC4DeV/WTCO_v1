// GLOBAL
import React from 'react';
import { Route } from 'react-router-dom';
// LOCAL
import './social.sass';

// COMPONENTS
import Navbar from './Navbar';
// import Profil from './Profil'; // PROFIL ET MODIF PROFIL
// import Messagerie from './Messagerie';// voir v2, ENVOYER + RECEVOIR + RECEVOIR MSG ENTREPRISE + ORDRE DE MISSION
// import Entreprise from './Entreprise';// voir v2, ENVOYER + RECEVOIR + RECEVOIR MSG ENTREPRISE + ORDRE DE MISSION
// import Blog from './src/components/social/Blog'; // COMMUNIQUER + POSTER ARTICLE + VOIR ARTICLES
// import Map from './src/components/social/Map'; // POSITION CAMIONS, REPERER CLIENTS, SOUCIS ROUTE, LIEUX D'INTERETS
//
// import Chat from './src/components/social/Chat'; // v2 ?
// import Photos from './src/components/social/Photos';// v2 ? ENVOYER ET RECEVOIR PHOTOS
// import Documents from './src/components/social/Photos'; // v2 ? CONSULTER DOCUMENTS
// import Formulaire from './src/components/social/Formulaire';// COMMUNIQUER AVEC ENTREPRISE + PREVENIR MISSION OK

/**
 * TODO:
 * - METTRE ARTICLE EN FAVORI
 * - BOUTON DECONNECTION CONNECTION
*/

const Social = () => (
  <React.Fragment>
    <Navbar />
    <div id="accueil-social">
      <h1>Accueil social</h1>
    </div>
  </React.Fragment>
);

export default Social;
