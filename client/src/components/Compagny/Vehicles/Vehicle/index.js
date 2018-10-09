/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/**
 * Local import
 */
// Composants


// Styles et assets
import './vehicle.sass';

/**
 * Code
 */
const Vehicle = ({
  id,
  brand,
  type,
  plate,
  kilometres,
  model,
  maintenances_history,
  next_maintenances,
  controle_date,
  documents,
}) => (
  <div className="vehicle">
    <div className="vehicle-details">
      <p>Marque: {brand}</p>
      <p>Modèle: {model}</p>
      <p>Type: {type}</p>
      <p>Immatriculation: {plate}</p>
      <p>kilomètres: {kilometres}</p>
      <p>Prochain passages au mines: {controle_date}</p>
    </div>
    <Link
      to={`/compagny/vehicle/${id}/edit`}
      className="vehicle-edit-button"
    >
      Modifier
    </Link>
    <Link
      to={`/compagny/vehicle/${id}/remove`}
      className="vehicle-remove-button"
    >
      Supprimer
    </Link>
  </div>
);

Vehicle.propTypes = {
  id: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  plate: PropTypes.string.isRequired,
  kilometres: PropTypes.number.isRequired,
  model: PropTypes.string.isRequired,
  maintenances_history: PropTypes.array.isRequired,
  next_maintenances: PropTypes.array.isRequired,
  documents: PropTypes.array.isRequired,
  controle_date: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default withRouter(Vehicle);
