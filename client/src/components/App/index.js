/**
 * Import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Local import
 */
// Composants
import Accueil from 'src/containers/Accueil/Accueil';
import Register from 'src/components/Accueil/Register';
import CompagnyHome from 'src/containers/Compagny/Home';
import CompagnyMissions from 'src/containers/Compagny/Missions';
import CompagnyVehicles from 'src/containers/Compagny/Vehicles';
import CompagnyDrivers from 'src/containers/Compagny/Drivers';
import Profil from 'src/components/Social/Profil';
import Messagerie from 'src/components/Social/Messagerie';
import Blog from 'src/containers/Social/Blog';
import Chat from 'src/components/Social/Chat';
import Entreprise from 'src/components/Social/Entreprise';
import Formulaire from 'src/components/Social/Formulaire';
import Map from 'src/components/Social/Map';
import Footer from 'src/components/Footer';
import Social from 'src/components/Social';
import Forbidden from 'src/components/Forbidden';
import NotFound from 'src/components/NotFound';
// Styles et assets
import './app.sass';

/**
 * Code
 */
const App = ({ connected, role, userCompagnyID }) => {
  return (
    <div id="app">
      {/* Autorisations en fonction du rôle */}
      {role === 'compagny' && (
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect to="/compagny/home" />
            )}
          />
          <Route path="/social" component={Forbidden} />

          <Route path="/compagny/home" component={CompagnyHome} />
          <Route path="/compagny/drivers" component={CompagnyDrivers} />
          <Route path="/compagny/missions" component={CompagnyMissions} />
          <Route path="/compagny/vehicles" component={CompagnyVehicles} />

          <Route component={NotFound} />
        </Switch>
      )}

      {role === 'driver' && (
        <Switch>
          <Route path="/compagny" component={Forbidden} />
          <Route exact path="/social" component={Social} />
          <Route path="/social/profil" component={Profil} />
          <Route path="/social/messagerie" component={Messagerie} />
          <Route path="/social/blog" component={Blog} />
          <Route path="/social/chat" component={Chat} />
          <Route path="/social/map" component={Map} />

            {/* Chaufeur n'appartenant pas à une entreprise */}
            {userCompagnyID === '0' && (
              <React.Fragment>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Redirect to="/social" />
                  )}
                />
                <Route path="/social/entreprise" component={Forbidden} />
                <Route path="/social/formulaire" component={Forbidden} />
              </React.Fragment>
            )}
            {/* Chauffeur appartenant a une entreprise */}
            {userCompagnyID !== '0' && (
              <React.Fragment>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Redirect to="/social/entreprise" />
                  )}
                />
                <Route path="/social/entreprise" component={Entreprise} />
                <Route path="/social/formulaire" component={Formulaire} />
              </React.Fragment>
            )}

          <Route component={NotFound} />
        </Switch>
      )}

      {/* Visiteur non connecté */}
      {/* {!connected && (
        <Switch>
          <Route path="/compagny" component={Forbidden} />

          <Route exact path="/social" component={Social} />
          <Route path="/social/profil" component={Forbidden} />
          <Route path="/social/messagerie" component={Forbidden} />
          <Route path="/social/blog" component={Blog} />
          <Route path="/social/chat" component={Chat} />
          <Route path="/social/entreprise" component={Forbidden} />
          <Route path="/social/formulaire" component={Forbidden} />
          <Route path="/social/map" component={Map} />

          <Route exact path="/" component={Accueil} />
          <Route path="/accueil" component={Accueil} />
          <Route path="/register" component={Register} />

          <Route component={NotFound} />
        </Switch>
      )} */}

      <Switch>
        <Route exact path="/" component={Accueil} />
        <Route path="/compagny/home" component={CompagnyHome} />
        <Route exact path="/social" component={Social} />
        <Route path="/accueil" component={Accueil} />
        <Route path="/register" component={Register} />

        <Route path="/compagny/home" component={CompagnyHome} />
        <Route path="/compagny/drivers" component={CompagnyDrivers} />
        <Route path="/compagny/missions" component={CompagnyMissions} />
        <Route path="/compagny/vehicles" component={CompagnyVehicles} />


        <Route exact path="/social" component={Social} />
        <Route path="/social/profil" component={Profil} />
        <Route path="/social/messagerie" component={Messagerie} />
        <Route path="/social/blog" component={Blog} />
        <Route path="/social/chat" component={Chat} />
        <Route path="/social/entreprise" component={Entreprise} />
        <Route path="/social/formulaire" component={Formulaire} />
        <Route path="/social/map" component={Map} />


        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
};

App.propTypes = {
  connected: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  userCompagnyID: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default App;
