/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  Switch,
  withRouter,
} from 'react-router-dom';

/**
 * Local import
 */
// Composants
import EditDriverForm from 'src/containers/Compagny/Drivers/EditDriverForm';
import RemoveDriver from 'src/containers/Compagny/Drivers/RemoveDriver';
import Profile from './Profile';
import Vehicles from './Vehicles';
import Missions from './Missions';

// Styles et assets
import './driver.sass';

/**
 * Code
 */
const Driver = ({ driver }) => {
  return (
    <div className="driver">
      <Switch>
        <Route
          exact
          path="/compagny/drivers/:id"
          render={() => <Profile {...driver} />}
        />
        <Route
          path="/compagny/drivers/:id/vehicles"
          render={() => <Vehicles {...driver} />}
        />
        <Route
          path="/compagny/drivers/:id/missions"
          render={() => <Missions {...driver} />}
        />
        <Route
          path="/compagny/drivers/:id/edit"
          render={() => <EditDriverForm driver={driver} />}
        />
        <Route
          path="/compagny/drivers/:id/remove"
          render={() => <RemoveDriver driver={driver} />}
        />
      </Switch>
    </div>
  );
};

Driver.propTypes = {
  driver: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default withRouter(Driver);
