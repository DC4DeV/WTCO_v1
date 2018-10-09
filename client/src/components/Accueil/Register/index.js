/**
 * Import
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import {
  Form,
  Text,
  Select,
  TextArea,
} from 'react-form';
/**
 * Local import
 */
// Composants
import CompagnyForm from 'src/containers/Accueil/Register/CompagnyForm';

// Styles et assets
import './register.sass';

/**
 * Code
 */
const Register = () => (
  <div id="register">
    <h1 className="text-center">Enregistrement</h1>
    <Route
      exact
      path="/register"
      render={() => (
        <div>
          <p>Veuillez indiquer si vous êtes une entreprise ou un chauffeur indépendant.</p>
          <p>Attention !!! Si vous êtes chauffeur et que votre entreprise s'inscrit, un compte sera créé pour vous !</p>
          <div>
            <Link className="btn" to="/register/compagny">Je suis une entreprise</Link>
            <Link className="btn" to="/register/driver">Je suis un chauffeur</Link>
          </div>
        </div>
      )}
    />
    <Route path="/register/compagny" component={CompagnyForm} />
  </div>
);


/**
 * Export
 */
export default Register;
