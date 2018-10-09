/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

/**
 * Local import
 */
// Composants


// Styles et assets
import './mission.sass';

/**
 * Code
 */
class Mission extends React.Component {
  static propTypes = {
    missionsList: PropTypes.arrayOf(PropTypes.object.isRequired),
    vehiclesList: PropTypes.arrayOf(PropTypes.object.isRequired),
    driversList: PropTypes.arrayOf(PropTypes.object.isRequired),
    missionsStatus: PropTypes.string.isRequired,
    driversStatus: PropTypes.string.isRequired,
    loadDriverMissions: PropTypes.func.isRequired,
    loadDriverDrivers: PropTypes.func.isRequired,
    compagnyId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    missionsList: [],
    vehiclesList: [],
    driversList: [],
  }

  componentDidMount() {
    const {
      missionsList,
      driversList,
      loadDriverMissions,
      loadDriverDrivers,
      compagnyId,
    } = this.props;

    // Charge les listes des chauffeurs et missions depuis la base si elle ne sont pas présentes
    // TODO Charger la liste des véhicules quand elle sera connectée
    if (missionsList.length < 1) loadDriverMissions();
    if (driversList.length < 1) loadDriverDrivers(compagnyId);
  }

  getDriverById = (id) => {
    const { driversList } = this.props;
    return (
      driversList.find(driver => driver.id === id)
    );
  }

  getVehicleById = (id) => {
    const { vehiclesList } = this.props;
    return (
      vehiclesList.find(vehicle => vehicle.id === id)
    );
  }

  getMissionById = (id) => {
    const { missionsList } = this.props;
    return (
      missionsList.find(mission => mission.id === id)
    );
  }

  render() {
    const { match, driversStatus, missionsStatus } = this.props;

    const { id } = match.params;
    const mission = this.getMissionById(id);

    const driver1 = this.getDriverById(mission.drivers[0]);
    const driver2 = this.getDriverById(mission.drivers[1]);
    const vehicle = this.getVehicleById(mission.vehicle_id);
    const trailor = this.getVehicleById(mission.trailor_id);

    return (
      <div id="driver-mission" className="flex-sm-fill">
        {driversStatus === 'loaded' && missionsStatus === 'loaded' && (
          <div className="mission-details">

            <p>
              Chauffeur(s): 
              <span className="d-block d-sm-inline">
                {driver1 && (
                <Link to={`/compagny/drivers/${driver1.id}`}>{driver1.last_name} {driver1.first_name}</Link>
                )}
              </span>
              <span className="d-block d-sm-inline">
                {driver2 && (
                  <React.Fragment>
                    <span className="d-none d-sm-inline"> - </span>
                    <Link to={`/compagny/drivers/${driver2.id}`}>{driver2.last_name} {driver2.first_name}</Link>
                  </React.Fragment>
                )}
              </span>
            </p>
            <p>Véhicule: 
              <span className="d-block d-sm-inline">
                {vehicle && (
                  <Link to={`/compagny/vehicles/${vehicle.id}`}>{vehicle.plate} </Link>
                )}
              </span>
            </p>
            <p>
              Remorque: 
              <span className="d-block d-sm-inline">
                {trailor && (
                  <Link to={`/compagny/vehicles/${vehicle.id}`}>{trailor.plate}</Link>
                )}
              </span>
            </p>

            <div className="mission-details-comments bg-ligth text-dark p-1 mb-3">
              {mission.mission_comment}
            </div>

            <div className="missions-details-loading bg-info text-white p-1 mb-1">
              <p>Chargement chez: <span className="d-block">{mission.loading_place}</span></p>
              <p>Adresse: <span className="d-block">{mission.loading_adress} {mission.loading_postcode} {mission.loading_city}</span></p>
              <p>Date de chargement: <span className="d-block">{mission.loading_date}</span> à: <span>{mission.loading_hour}</span></p>
              {mission.loaded && (
                <div className="bg-light text-dark p-1">
                  <p>Arrivée au chargement le: <span className="d-block">{mission.real_loading_date}</span> à: <span>{mission.arrival_loading_hour}</span></p>
                  <p>Départ: <span>{mission.departure_loading_hour}</span></p>
                  <p>kms: <span>{mission.km_loading}</span></p>
                  <p>commentaire: <span className="d-block">{mission.comment_load}</span></p>
                </div>
              )}
            </div>
            <div className="missions-details-unloading bg-info text-white p-1">
              <p>Livraison chez: <span className="d-block">{mission.unloading_place}</span></p>
              <p>Adresse: <span className="d-block">{mission.unloading_adress} {mission.unloading_postcode} {mission.unloading_city}</span></p>
              <p>Date de déchargement: <span className="d-block">{mission.unloading_date}</span> à: <span>{mission.unloading_hour}</span></p>
              {mission.unloaded && (
                <div className="bg-light text-dark p-1">
                  <p>Arrivée au déchargement le: <span className="d-block">{mission.real_unloading_date}</span> à: <span>{mission.arrival_unloading_hour}</span></p>
                  <p>Départ: <span>{mission.departure_unloading_hour}</span></p>
                  <p>kms: <span>{mission.km_unloading}</span></p>
                  <p>commentaire: <span className="d-block">{mission.comment_unload}</span></p>
                </div>
              )}
            </div>
          </div>
        )}
        {!mission.loaded && (
          <Link
            to={`/social/entreprise/missions/${id}/load`}
            className="mission-load-button btn btn btn-primary"
          >
            Chargement Effectué
          </Link>

        )}
        {mission.loaded && !mission.unloaded && (
          <Link
            to={`/social/entreprise/missions/${id}/load`}
            className="mission-load-button btn btn btn-primary"
          >
            Déchargement Effectué
          </Link>
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default Mission;
