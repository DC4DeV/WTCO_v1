/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
import Mission from 'src/components/Compagny/Missions/Mission';
import AddMissionForm from 'src/containers/Compagny/Missions/AddMissionForm';

// Styles et assets
import './missions.sass';

/**
 * Code
 */
class Missions extends React.Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    missions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    missionsStatus: PropTypes.string.isRequired,
    loadMissions: PropTypes.func.isRequired,
    loadMissionsAuto: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { loadMissions, loadMissionsAuto } = this.props;

    // Charge la liste des missions depuis la bdd
    // TODO Interval pour le chargement des missions afin de récupérer les changements
    loadMissions();

    this.interval = setInterval(() => {
      loadMissionsAuto();
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getMissionById = (id) => {
    const { missions } = this.props;
    return (
      missions.find(mission => mission.id === id)
    );
  }

  getColorClass = (loaded, unloaded) => (
    classNames({
      'd-sm-inline': true,
      'text-primary': !loaded && !unloaded,
      'text-warning': loaded && !unloaded,
      'text-success': loaded && unloaded,
    })
  )

  render() {
    const { mobile, missions, missionsStatus } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div id="missions">
          <h2>Gestion de l'activité</h2>

          {/* Version mobile */}
          {mobile && missionsStatus === 'loaded' && (
            <React.Fragment>
              <h3>Liste des missions:</h3>
              <div>
                {/* Affichage de toutes les missions dans un accordeon avec bootstrap */}
                <ul className="missions-list accordion" id="accordion">
                  {/* Bouton d'ajout de mission */}
                  <NavLink to="/compagny/missions/add">
                    <button
                      className="add-mission-button"
                      type="button"
                      data-toggle="collapse"
                      data-target="#missionsAdd"
                    >
                      +
                    </button>
                  </NavLink>
                  {/* Formulaire d'ajout */}
                  <div id="missionsAdd" className="collapse" data-parent="#accordion">
                    <AddMissionForm />
                  </div>
                  {missions.map(mission => (
                    <li key={mission.id}>
                      <NavLink to={`/compagny/missions/${mission.id}`}>
                        <button
                          type="button"
                          data-toggle="collapse"
                          data-target={`#collapse${mission.id}`}
                          className="btn"
                        >
                          <div>
                            <p className={this.getColorClass(mission.loaded, mission.unloaded)}>{mission.loading_place} {mission.loading_city}</p>
                            <p className={this.getColorClass(mission.loaded, mission.unloaded)}>=> {mission.unloading_place} {mission.unloading_city}</p>
                          </div>
                        </button>
                      </NavLink>
                      {/* Affiche une mission */}
                      <div id={`collapse${mission.id}`} className="collapse" data-parent="#accordion">
                        <Mission mission={mission} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </React.Fragment>
          )}

          {/* Verion desktop */}
          {!mobile && missionsStatus === 'loaded' && (
            <div className="">
              {/* Affiche les composants selon les routes */}
              <Switch>
                {/* Route pour afficher le formulaire d'ajout de mission */}
                <Route
                  exact
                  path="/compagny/missions"
                  render={() => (
                    <ul className="missions-list">
                      <h3>Liste des missions:</h3>
                      <Link className="add-mission-button" to="/compagny/missions/add">AJOUT</Link>
                      {/* Liste de toutes les missions */}
                      {missions.map(mission => (
                        <li key={mission.id}>
                          <NavLink
                            to={`/compagny/missions/${mission.id}`}
                            className={this.getColorClass(mission.loaded, mission.unloaded)}
                          >
                            {mission.loading_place} {mission.loading_city} => {mission.unloading_place} {mission.unloading_city}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                />
                <Route
                  path="/compagny/missions/add"
                  component={AddMissionForm}
                />
                {/* Route pour afficher les details d'une mission */}
                <Route
                  path="/compagny/missions/:id"
                  render={({ match }) => {
                    const { id } = match.params;
                    const mission = this.getMissionById(id);
                    return (
                      <div>
                        <Mission mission={mission} />
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

/**
 * Export
 */
export default Missions;
