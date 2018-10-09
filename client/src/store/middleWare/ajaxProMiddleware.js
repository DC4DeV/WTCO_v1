/**
 * npm import
 */
import axios from 'axios';

/**
 * Local import
 */
// Actions
import {
  loadDrivers,
  driversList,
  LOAD_DRIVERS,
  SAVE_DRIVER,
  SAVE_EDITED_DRIVER,
  REMOVE_DRIVER,
  loadMissions,
  missionsList,
  LOAD_MISSIONS,
  LOAD_MISSIONS_AUTO,
  ADD_MISSION,
  REMOVE_MISSION,
} from '../reducers/reducerCompagny';

axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Code
 */
const ajaxPro = store => next => (action) => {
  switch (action.type) {
    case LOAD_DRIVERS: {
      axios
        .get('/compagny/drivers')
        .then((response) => {
          const { data } = response.data;
          const state = store.getState();
          const { id } = state.reducerRegister.currentUser;

          // Filtre les chauffeurs reçus pour ne retenir que ceux appartenant à l'entreprise
          const drivers = data.filter(driver => driver.compagny_id === id);

          // Je dispatch les chauffeurs dans le store
          store.dispatch(driversList(drivers));
        })
        .catch((error) => {
          // console.log('error de get');
          console.error(error);
        });
      break;
    }

    case SAVE_DRIVER: {
      // Récupération du nouveau chauffeur transmis dans l'action creator
      const { newDriver } = action;

      // Envoi du nouveau chauffeur au serveur
      axios
        .post('/compagny/drivers/add', { ...newDriver })
        .then((response) => {
        // Recharge la liste des chauffeurs depuis la base
        // ( avec tous leurs champs, notament _id qui va permettre la modification ).
          store.dispatch(loadDrivers());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case SAVE_EDITED_DRIVER: {
      // Récupération de l'id du chauffeur, transmise dans l'action creator
      // pour la route et pour la récupération du chauffeur modifié
      const { id } = action;
      // Récupération du chauffeur modifié
      const state = store.getState();
      const { drivers } = state.reducerCompagny;
      const editedDriver = drivers.find(driver => driver.id === id);

      // Envoi du chauffeur modifié au serveur
      axios
        .put(`/compagny/drivers/${id}/edit`, { ...editedDriver })
        .then((response) => {
          store.dispatch(loadDrivers());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case REMOVE_DRIVER: {
      // Récupération du chauffeur à retirer de l'entreprise
      const { id } = action;
      const state = store.getState();
      const { drivers } = state.reducerCompagny;

      const removedDriver = drivers.find(driver => driver.id === id);

      // Envoi au serveur qui se chargera de mettre compagny_id à 0
      axios
        .put(`/compagny/drivers/${id}/remove`, { ...removedDriver })
        .then((response) => {
          // Rechargement de la liste des chauffeurs
          store.dispatch(loadDrivers());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case LOAD_MISSIONS: {
      axios
        .get('/compagny/missions')
        .then((response) => {
          const { data } = response.data;
          const state = store.getState();
          const { id } = state.reducerRegister.currentUser;

          const missions = data.filter(mission => mission.compagny_id === id);

          // Je dispatch les missions dans le store
          store.dispatch(missionsList(missions));
        })
        .catch((error) => {
          // console.log('error de get');
          console.error(error);
        });
      break;
    }

    case LOAD_MISSIONS_AUTO: {
      axios
        .get('/compagny/missions')
        .then((response) => {
          const { data } = response.data;
          const state = store.getState();
          const { id } = state.reducerRegister.currentUser;

          const missions = data.filter(mission => mission.compagny_id === id);

          // Je dispatch les missions dans le store
          store.dispatch(missionsList(missions));
        })
        .catch((error) => {
          // console.log('error de get');
          console.error(error);
        });
      break;
    }

    case ADD_MISSION: {
      const { newMission } = action;

      axios
        .post('/compagny/missions/add', { ...newMission })
        .then((response) => {
          // Recharge la liste des missions depuis la base
          // ( avec tous leurs champs, notament _id qui va permettre la modification ).
          store.dispatch(loadMissions());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case REMOVE_MISSION: {
      // Récupère _id transmis dans l'action creator.
      const { id } = action;

      axios
        .delete('/compagny/missions/remove', {
          params: { _id: id },                    // transmets _id en params que je recupère
        })                                        // dans query sur le serveur
        .then((response) => {
          // Rechargement de la liste des chauffeurs
          store.dispatch(loadMissions());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
      break;
  }
  // Passe à ton voisin
  next(action);
};

/**
 * Export
 */
export default ajaxPro;
