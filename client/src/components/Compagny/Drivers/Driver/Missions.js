/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import Nav from 'src/components/Compagny/Drivers/Nav';

// Styles et assets
import './driver.sass';

/**
 * Code
 */
// TODO historique des missions de
const Missions = ({ id, last_name, first_name }) => (
  <React.Fragment>
    <Nav id={id} />
    <div id="vehicles">
      historique des missions de {last_name} {first_name}
    </div>
  </React.Fragment>
);

Missions.propTypes = {
  id: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Missions;
