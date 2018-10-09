/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants
import Header from 'src/components/Header';
import Disconnect from 'src/containers/Disconnect';
import MissionsSummary from 'src/components/Compagny/Home/MissionsSummary';
import VehiclesSummary from 'src/components/Compagny/Home/VehiclesSummary';
import DriversSummary from 'src/components/Compagny/Home/DriversSummary';

// Styles et assets
import './home.sass';

/**
 * Code
 */
class Home extends React.Component {
  static propTypes = {
    actions: PropTypes.shape({
      loadDrivers: PropTypes.func.isRequired,
      loadMissions: PropTypes.func.isRequired,
    }).isRequired,
    drivers: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    missions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    driversStatus: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const { loadDrivers, loadMissions } = this.props.actions;
    const { drivers } = this.props;

    // TODO Interval pour charger les missions
    loadMissions();
    if (drivers.length < 1) loadDrivers();
    // TODO Charger la liste des véhicules quand elle sera connectée
  }

  render() {
    const { driversStatus } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div id="home">
          <div className="d-flex justify-content-between">
            <button type="button">Profile de l'entreprise</button>
            <Disconnect />
          </div>
          <h2>Bienvenue chez WTCO</h2>
          <h3>Résumé de votre activité récente</h3>
          <h4>Missions :</h4>
          <MissionsSummary />
          <h4>Véhicules :</h4>
          <VehiclesSummary />
          {driversStatus === 'loaded' && (
            <React.Fragment>
              <h4>Chauffeurs :</h4>
              <DriversSummary />
            </React.Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}


/**
 * Export
 */
export default Home;
