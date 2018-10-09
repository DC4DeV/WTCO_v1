import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './missions.sass';

class Missions extends React.Component {
  static propTypes = {
    missionsStatus: PropTypes.string.isRequired,
    driversStatut: PropTypes.string.isRequired,
    missionsList: PropTypes.arrayOf(PropTypes.object.isRequired),
    userId: PropTypes.string.isRequired,
    compagnyId: PropTypes.string.isRequired,
    loadDriverMissions: PropTypes.func.isRequired,
    loadDriverDrivers: PropTypes.func.isRequired,
    loadDriverMissionsAuto: PropTypes.func.isRequired,
  }

  static defaultProps = {
    missionsList: [],
  }

  componentDidMount() {
    const {
      userId,
      compagnyId,
      loadDriverMissions,
      loadDriverDrivers,
      loadDriverMissionsAuto,
      missionsList,
    } = this.props;
    // Charge les missions
    if (missionsList.length < 1) loadDriverMissions(userId);

    this.interval = setInterval(() => {
      loadDriverMissionsAuto(userId);
    }, 10000);

    loadDriverDrivers(compagnyId);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { missionsStatus, driversStatut, missionsList } = this.props;

    const toLoad = missionsList.filter(mission => !mission.loaded);
    const loaded = missionsList.filter(mission => mission.loaded && !mission.unloaded);
    const unloaded = missionsList.filter(mission => mission.unloaded);
    return (
      <div className="" id="driver-missions">
        {missionsStatus === 'loaded' && driversStatut === 'loaded' && (
          <React.Fragment>
            <h3>Liste des Missions:</h3>
            <div>
              <h4>A charger:</h4>
              {toLoad.map(mission => (
                <Link
                  className="d-block p-2"
                  key={mission.id}
                  to={`/social/entreprise/missions/${mission.id}`}
                >
                  {mission.loading_place} {mission.loading_city} => {mission.unloading_place} {mission.unloading_city}
                </Link>
              ))}
              <h4>A décharger:</h4>
              {loaded.map(mission => (
                <Link
                  className="d-block p-2"
                  key={mission.id}
                  to={`/social/entreprise/missions/${mission.id}`}
                >
                  {mission.loading_place} {mission.loading_city} => {mission.unloading_place} {mission.unloading_city}
                </Link>
              ))}
              <h4>Terminés:</h4>
              {unloaded.map(mission => (
                <Link
                  className="d-block p-2"
                  key={mission.id}
                  to={`/social/entreprise/missions/${mission.id}`}
                >
                  {mission.loading_place} {mission.loading_city} => {mission.unloading_place} {mission.unloading_city}
                </Link>
              ))}
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}


export default Missions;
