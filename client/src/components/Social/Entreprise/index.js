import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';

import Menu from 'src/components/Social/Entreprise/Menu';
import Missions from 'src/containers/Social/Entreprise/Missions';
import Mission from 'src/containers/Social/Entreprise/Missions/Mission';
import LoadForm from 'src/containers/Social/Entreprise/Missions/LoadForm';
import Navbar from '../Navbar';

import './entreprise.sass';

const Entreprise = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div id="myCompagny">
        <h2 className="text-center mb-4">Mon entreprise</h2>
        <div className="d-block d-sm-flex">
          <Menu />
          <Switch>
            <Route
              path="/social/entreprise/general"
              render={() => (<div>general</div>)}
            />
            <Route
              exact
              path="/social/entreprise/missions/:id"
              component={Mission}
            />
            <Route
              path="/social/entreprise/missions/:id/load"
              component={LoadForm}
            />
            <Route
              path="/social/entreprise/missions"
              component={Missions}
            />
            <Route
              path="/social/entreprise/messages"
              render={() => (<div>messages</div>)}
            />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Entreprise);
