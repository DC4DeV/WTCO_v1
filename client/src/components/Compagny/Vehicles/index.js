/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  NavLink,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

/**
 * Local import
 */
// Composants
import Header from 'src/components/Header';
import Vehicle from 'src/components/Compagny/Vehicles/Vehicle';
// import AddDriverForm from 'src/containers/Compagny/Drivers/AddDriverForm';

// Styles et assets
import './vehicles.sass';

/**
 * Code
 */
const Vehicles = ({ mobile, vehicles }) => {
  const getVehicleById = id => vehicles.find(vehicle => vehicle.id === id);
  return (
    <React.Fragment>
      <Header />
      <div id="vehicles">
        <h2>Gestion des véhicules</h2>
        <h3>Liste des véhicules:</h3>

        {/* Version mobile */}
        {mobile && (
          <div>
            {/* Affichage de tous les véhicules dans un accordeon avec bootstrap */}
            <ul className="vehicles-list accordion" id="accordion">
              {vehicles.map(vehicle => (
                <li key={vehicle.id}>
                  <NavLink to={`/compagny/vehicles/${vehicle.id}`}>
                    <button
                      type="button"
                      data-toggle="collapse"
                      data-target={`#collapse${vehicle.id}`}
                      className="btn"
                    >
                      {vehicle.type} {vehicle.plate}
                    </button>
                  </NavLink>
                  {/* Affiche un véhicule */}
                  <div id={`collapse${vehicle.id}`} className="collapse" data-parent="#accordion">
                    <Vehicle {...vehicle} />
                  </div>
                </li>
              ))}
              {/* Bouton d'ajout de véhicule */}
              <NavLink to="/compagny/vehicles/add">
                <button
                  className="add-vehicle-button"
                  type="button"
                  data-toggle="collapse"
                  data-target="#vehiclesAdd"
                >
                  +
                </button>
              </NavLink>
              {/* Formulaire d'ajout */}
              <div id="vehiclesAdd" className="collapse" data-parent="#accordion">
                {/* <AddVehicleForm /> */}
              </div>
            </ul>
          </div>
        )}

        {/* Verion desktop */}
        {!mobile && (
          <div className="d-flex">
            <ul className="vehicles-list">
              {/* Liste de tous les véhicules */}
              {vehicles.map(vehicle => (
                <li key={vehicle.id}>
                  <NavLink
                    to={`/compagny/vehicles/${vehicle.id}`}
                    className=""
                  >
                    {vehicle.type} {vehicle.plate}
                  </NavLink>
                </li>
              ))}
              <Link className="add-vehicle-button" to="/compagny/vehicles/add">AJOUT</Link>
            </ul>

            {/* Affiche les composants selon les routes */}
            <Switch>
              {/* Route pour afficher le formulaire d'ajout de véhicule */}
              <Route
                path="/compagny/vehicles/add"
                // component={AddVehicleForm}
              />
              {/* Route pour afficher les details d'un véhicule */}
              <Route
                path="/compagny/vehicles/:id"
                render={({ match }) => {
                  const { id } = match.params;
                  const vehicle = getVehicleById(id);
                  return (
                    <div>
                      <Vehicle {...vehicle} />
                    </div>
                  );
                }}
              />
            </Switch>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

Vehicles.propTypes = {
  mobile: PropTypes.bool.isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Vehicles;
