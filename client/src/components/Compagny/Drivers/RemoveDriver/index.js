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
const RemoveDriver = ({ driver, onRemoveDriver }) => {
  // const { id } = driver;
  return (
    <div className="driver-remove">
      <p className="mb-3">Etes vous sûr de vouloir effacer {driver.last_name} {driver.first_name} ?</p>
      <div>
        <Link to="/compagny/drivers">
          <button className="mr-4 driver-remove-button-yes" type="button" onClick={() => onRemoveDriver()}>Oui</button>
        </Link>
        <Link to={`/compagny/drivers/${driver.id}`}>
          <button className="ml-4 driver-remove-button-no" type="button">Non</button>
        </Link>
      </div>
    </div>
  );
};

RemoveDriver.propTypes = {
  driver: PropTypes.object.isRequired,
  onRemoveDriver: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default withRouter(RemoveDriver);
