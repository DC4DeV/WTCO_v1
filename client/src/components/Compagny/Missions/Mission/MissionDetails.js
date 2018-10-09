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
    driversList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    vehiclesList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    driversStatus: PropTypes.string.isRequired,
    loadDrivers: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    loading_place: PropTypes.string.isRequired,
    loading_adress: PropTypes.string,
    loading_postcode: PropTypes.string,
    loading_city: PropTypes.string,
    loading_date: PropTypes.string,
    real_loading_date: PropTypes.string,
    loading_hour: PropTypes.string,
    arrival_loading_hour: PropTypes.string,
    departure_loading_hour: PropTypes.string,
    km_loading: PropTypes.number,
    unloading_place: PropTypes.string,
    unloading_adress: PropTypes.string,
    unloading_postcode: PropTypes.string,
    unloading_city: PropTypes.string,
    unloading_date: PropTypes.string,
    real_unloading_date: PropTypes.string,
    unloading_hour: PropTypes.string,
    arrival_unloading_hour: PropTypes.string,
    departure_unloading_hour: PropTypes.string,
    km_unloading: PropTypes.number,
    mission_comment: PropTypes.string,
    comment_load: PropTypes.string,
    comment_unload: PropTypes.string,
    drivers: PropTypes.array,
    vehicle_id: PropTypes.string,
    trailor_id: PropTypes.string,
    loaded: PropTypes.bool,
    unloaded: PropTypes.bool,
  }

  static defaultProps = {
    loading_adress: '',
    loading_postcode: '',
    real_loading_date: '',
    loading_hour: '',
    arrival_loading_hour: '',
    departure_loading_hour: '',
    km_loading: null,
    unloading_adress: '',
    unloading_postcode: '',
    unloading_city: '',
    loading_city: '',
    loading_date: '',
    unloading_date: '',
    real_unloading_date: '',
    unloading_hour: '',
    arrival_unloading_hour: '',
    departure_unloading_hour: '',
    km_unloading: null,
    unloading_place: '',
    mission_comment: '',
    comment_load: '',
    comment_unload: '',
    drivers: [],
    vehicle_id: '',
    trailor_id: '',
    loaded: false,
    unloaded: false,
  }

  componentDidMount() {
    const { driversList, loadDrivers } = this.props;

    // Charge la liste des chauffeurs depuis la base si elle n'est pas présente
    // TODO Charger aussi la liste des véhicules quand elle sera connectée
    if (driversList.length < 1) loadDrivers();
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

  render() {
    const {
      driversStatus,
      id,
      loading_place,
      loading_adress,
      loading_postcode,
      loading_city,
      loading_date,
      real_loading_date,
      loading_hour,
      arrival_loading_hour,
      departure_loading_hour,
      km_loading,
      unloading_place,
      unloading_adress,
      unloading_postcode,
      unloading_city,
      unloading_date,
      real_unloading_date,
      unloading_hour,
      arrival_unloading_hour,
      departure_unloading_hour,
      km_unloading,
      mission_comment,
      comment_load,
      comment_unload,
      drivers,
      vehicle_id,
      trailor_id,
      loaded,
      unloaded,
    } = this.props;

    const driver1 = this.getDriverById(drivers[0]);
    const driver2 = this.getDriverById(drivers[1]);
    const vehicle = this.getVehicleById(vehicle_id);
    const trailor = this.getVehicleById(trailor_id);

    return (
      <React.Fragment>
        <Link
          className="d-none d-md-block text-left mb-4"
          to="/compagny/missions"
        >
          Retour à la liste
        </Link>
        {driversStatus === 'loaded' && (
          <div className="mission-details">
            <p className="d-none d-md-block mb-3 text-primary">
              {loading_place} {loading_city} => {unloading_place} {unloading_city}
            </p>
            <div className="mission-details-comments">
              {mission_comment}
            </div>
            <p>Chauffeur(s):
              <span className="d-block d-sm-inline">
                {driver1 && (
                  <Link className="field" to={`/compagny/drivers/${driver1.id}`}>{driver1.last_name} {driver1.first_name} </Link>
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
                  <Link className="field" to={`/compagny/vehicles/${vehicle.id}`}>{vehicle.plate} </Link>
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
            <div className="missions-details-loading mb-2">
              <React.Fragment>
                <div className="p-2 mb-1 bg-info text-white">
                  <p>Chargement chez: <span className="d-block">{loading_place}</span></p>
                  <p>Adresse: <span className="d-block">{loading_adress} {loading_postcode} {loading_city}</span></p>
                  <p>Date de chargement: <span className="d-block">{loading_date}</span> à <span>{loading_hour}</span></p>
                </div>
                {loaded && (
                  <div className="bg-success text-white p-2">
                    <p>Arrivée au chargement le: <span className="d-block">{real_loading_date}</span> à <span>{arrival_loading_hour}</span></p>
                    <p>Départ: <span>{departure_loading_hour}</span></p>
                    <p>kms: <span>{km_loading}</span></p>
                    <p>commentaire: <span className="d-block">{comment_load}</span></p>
                  </div>
                )}
                {!loaded && (
                  <div className="bg-warning text-dark p-2">
                    Chargement non effecué
                  </div>
                )}
              </React.Fragment>
            </div>
            <div className="missions-details-unloading">
              <React.Fragment>
                <div className="p-2 mb-1 bg-info text-white">
                  <p>Livraison chez: <span className="d-block">{unloading_place}</span></p>
                  <p>Adresse: <span className="d-block">{unloading_adress} {unloading_postcode} {unloading_city}</span></p>
                  <p>Date de déchargement: <span className="d-block">{unloading_date}</span> à <span>{unloading_hour}</span></p>
                </div>
                {unloaded && (
                  <div className="bg-success text-white p-2">
                    <p>Arrivée au déchargement le: <span className="d-block">{real_unloading_date}</span> à <span>{arrival_unloading_hour}</span></p>
                    <p>Départ: <span>{departure_unloading_hour}</span></p>
                    <p>kms: <span>{km_unloading}</span></p>
                    <p>commentaire: <span className="d-block">{comment_unload}</span></p>
                  </div>
                )}
                {!unloaded && (
                  <div className="bg-warning text-dark p-2">
                    Déchargement non effecué
                  </div>
                )}
              </React.Fragment>
            </div>
          </div>
        )}
        <div className="d-sm-flex justify-content-between">
          <Link
            to={`/compagny/missions/${id}/edit`}
            className="mission-edit-button"
          >
            Modifier
          </Link>
          <Link
            to={`/compagny/missions/${id}/remove`}
            className="mission-remove-button"
          >
            Supprimer
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

/**
 * Export
 */
export default Mission;
