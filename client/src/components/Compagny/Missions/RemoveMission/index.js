/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/**
 * Local import
 */
// Composants

// Styles et assets
import './removedriver.sass';

/**
 * Code
 */
const RemoveMission = ({ mission, onRemoveMission }) => {
  return (
    <div className="mission-remove">
      <p>{mission.loading_place} {mission.loading_city} => {mission.unloading_place} {mission.unloading_city}</p>
      <p>Etes vous sûr de vouloir effacer cette mission</p>
      <div>
        <Link to="/compagny/missions">
          <button className="mission-remove-yes-button" type="button" onClick={() => onRemoveMission()}>Oui</button>
        </Link>
        <Link to={`/compagny/missions/${mission.id}`}>
          <button className="mission-remove-no-button" type="button">Non</button>
        </Link>
      </div>
    </div>
  );
};

RemoveMission.propTypes = {
  mission: PropTypes.object.isRequired,
  onRemoveMission: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default withRouter(RemoveMission);
