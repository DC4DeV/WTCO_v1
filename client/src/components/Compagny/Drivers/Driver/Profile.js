/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'src/components/Compagny/Drivers/Nav';
import { withRouter, Link } from 'react-router-dom';

/**
 * Local import
 */
// Composants


// Styles et assets
import './driver.sass';

/**
 * Code
 */
const Profile = ({
  id,
  last_name,
  first_name,
  birthdate,
  sexe,
  nationality,
  mail,
  nss,
  adress,
  licence,
  licence_validity,
  fcos,
}) => (
  <React.Fragment>
    <Nav id={id} />
    <div className="driver-details">
      <p>Nom: {last_name}</p>
      <p>Prénom: {first_name}</p>
      <p>Date de naissance: {birthdate}</p>
      <p>Sexe: {sexe}</p>
      <p>Nationalité: {nationality}</p>
      <p>N° de sécurité sociale: {nss}</p>
      <p>Mail: {mail}</p>
      <p>Adresse: {adress}</p>
      <p>N° de permis: {licence}</p>
      <p>Validité du permis: {licence_validity}</p>
      <p>Validité FCOS: {fcos}</p>
    </div>
    <Link
      to={`/compagny/drivers/${id}/edit`}
      className="driver-edit-button"
    >
      Modifier
    </Link>
    <Link
      to={`/compagny/drivers/${id}/remove`}
      className="driver-remove-button"
    >
      Supprimer
    </Link>
  </React.Fragment>
);

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  birthdate: PropTypes.string.isRequired,
  sexe: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  nss: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  licence: PropTypes.string.isRequired,
  licence_validity: PropTypes.string.isRequired,
  fcos: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default withRouter(Profile);
