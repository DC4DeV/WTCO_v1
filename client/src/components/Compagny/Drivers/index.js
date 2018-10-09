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
import Driver from 'src/components/Compagny/Drivers/Driver';
import AddDriverForm from 'src/containers/Compagny/Drivers/AddDriverForm';

// Styles et assets
import './drivers.sass';

/**
 * Code
 */
class Drivers extends React.Component {
  static propTypes = {
    actions: PropTypes.shape({
      loadDrivers: PropTypes.func.isRequired,
    }).isRequired,
    mobile: PropTypes.bool.isRequired,
    drivers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    status: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { loadDrivers } = this.props.actions;
    const { drivers } = this.props;

    // Charge les chauffeurs depuis la bdd si non présents
    if (drivers.length < 1) loadDrivers();
  }

  getDriverById = (id) => {
    const { drivers } = this.props;
    return (
      drivers.find(driver => driver.id === id)
    );
  }

  render() {
    const { mobile, drivers, status } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div id="drivers">
          <h2>Gestion des chauffeurs</h2>
          <h3>Liste des chauffeurs:</h3>

          {mobile && status === 'loaded' && (
            <div>
              {/* Affichage de tous les chauffeurs dans un accordeon avec bootstrap */}
              <ul className="drivers-list accordion" id="accordion">
                {drivers.map(driver => (
                  <li key={driver.id}>
                    <NavLink to={`/compagny/drivers/${driver.id}`}>
                      <button
                        type="button"
                        data-toggle="collapse"
                        data-target={`#collapse${driver.id}`}
                        className="btn"
                      >
                        {driver.last_name} {driver.first_name}
                      </button>
                    </NavLink>
                    {/* Affiche un chauffeur */}
                    <div id={`collapse${driver.id}`} className="collapse" data-parent="#accordion">
                      <Driver driver={driver} />
                    </div>
                  </li>
                ))}
                {/* Bouton d'ajout de chauffeur */}
                <NavLink to="/compagny/drivers/add">
                  <button
                    className="add-driver-button"
                    type="button"
                    data-toggle="collapse"
                    data-target="#driversAdd"
                  >
                    +
                  </button>
                </NavLink>
                {/* Formulaire d'ajout */}
                <div id="driversAdd" className="collapse" data-parent="#accordion">
                  <AddDriverForm />
                </div>
              </ul>
            </div>
          )}

          {/* Verion desktop */}
          {!mobile && status === 'loaded' && (
            <div className="d-flex">
              <ul className="drivers-list">
                {/* Liste de tous les chauffeurs */}
                {drivers.map(driver => (
                  <li key={driver.id}>
                    <NavLink
                      to={`/compagny/drivers/${driver.id}`}
                      className=""
                    >
                      {driver.last_name} {driver.first_name}
                    </NavLink>
                  </li>
                ))}
                <Link className="add-driver-button" to="/compagny/drivers/add">AJOUT</Link>
              </ul>

              {/* Affiche les composants selon les routes */}
              <Switch>
                {/* Route pour afficher le formulaire d'ajout de chauffeur */}
                <Route
                  path="/compagny/drivers/add"
                  component={AddDriverForm}
                />
                {/* Route pour afficher les details d'un chauffeur */}
                <Route
                  path="/compagny/drivers/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    const driver = this.getDriverById(id);
                    return (
                      <div>
                        <Driver driver={driver} />
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
  }
}

Drivers.propTypes = {
  mobile: PropTypes.bool.isRequired,
  drivers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Drivers;
