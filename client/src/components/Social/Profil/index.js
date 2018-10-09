import React from 'react';

import Disconnect from 'src/containers/Disconnect';
import Navbar from '../Navbar';

import './profil.sass';


const Profil = () => (
  <React.Fragment>
    <Navbar />
    <div id="profil">
      <h2 className="text-center">Mon profil</h2>
      <Disconnect />
    </div>
  </React.Fragment>
);

export default Profil;
