/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
  Switch,
  Route,
} from 'react-router-dom';

/**
 * Local import
 */
// Composants
import MissionDetails from 'src/containers/Compagny/Missions/MissionDetails';
import RemoveMission from 'src/containers/Compagny/Missions/RemoveMission';

// Styles et assets
import './mission.sass';

/**
 * Code
 */
const Mission = ({ mission }) => {
  return (
    <div className="mission">
      <Switch>
        <Route
          exact
          path="/compagny/missions/:id"
          render={() => <MissionDetails {...mission} />}
        />
        {/* <Route
          path="/compagny/drivers/:id/edit"
          render={() => <EditDriverForm driver={driver} />}
        /> */}
        <Route
          path="/compagny/missions/:id/remove"
          render={() => <RemoveMission mission={mission} />}
        />
      </Switch>
    </div>
  );
};

Mission.propTypes = {
  mission: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default withRouter(Mission);
