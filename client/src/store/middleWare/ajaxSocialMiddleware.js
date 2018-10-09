/**
 * npm import
 */
import axios from 'axios';

/**
 * Local import
 */
// Actions
import {
  ADD_ARTICLE,
  loadArticles,
  articlesList,
  LOAD_ARTICLES,
  LOAD_DRIVER_MISSIONS,
  loadDriverMissions,
  driverMissionsList,
  EDIT_DRIVER_MISSION,
  LOAD_DRIVER_MISSIONS_AUTO,
  LOAD_DRIVER_DRIVERS,
  driverDriversList,
} from '../reducers/reducerSocial';

axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
/**
//  * Code
 */

const ajaxSocial = store => next => (action) => {
  switch (action.type) {
    case ADD_ARTICLE: {
      const { newArticle } = action;

      axios
        .post('/social/articles/add', { ...newArticle })
        .then((response) => {
          // Recharge la liste des chauffeurs depuis la base
          // ( avec tous leurs champs, notament _id qui va permettre la modification ).
          store.dispatch(loadArticles());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    case LOAD_ARTICLES: {
      // console.log('Heyy changement de statut');

      axios
        .get('/social/articles')
        .then((response) => {
          const { data } = response.data;
          // Filtre les chauffeurs reçus pour ne retenir que ceux appartenant à l'entreprise
          // const articles = data.filter(article => article.social_id === '1');

          // Je dispatch les chauffeurs dans le store
          store.dispatch(articlesList(data));
        })
        .catch((error) => {
          // console.log('error de get');
          console.error(error);
        });
      break;
    }

    case LOAD_DRIVER_MISSIONS: {
      const { userId } = action;

      axios
        .get('/social/missions', {
          params: {
            userId,
          },
        })
        .then((response) => {
          const { missions } = response.data;
          store.dispatch(driverMissionsList(missions));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case LOAD_DRIVER_MISSIONS_AUTO: {
      const { userId } = action;

      axios
        .get('/social/missions', {
          params: {
            userId,
          },
        })
        .then((response) => {
          const { missions } = response.data;
          store.dispatch(driverMissionsList(missions));
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case EDIT_DRIVER_MISSION: {
      const { editedMission } = action;
      const { id } = editedMission;

      const state = store.getState();
      const userId = state.reducerRegister.currentUser.id;

      axios
        .put(`/missions/${id}/edit`, { ...editedMission })
        .then((response) => {
          store.dispatch(loadDriverMissions(userId));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    case LOAD_DRIVER_DRIVERS: {
      const { compagnyId } = action;

      axios
        .get('/drivers', {
          params: {
            compagnyId,
          },
        })
        .then((response) => {
          const { drivers } = response.data;
          store.dispatch(driverDriversList(drivers));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }

    default:
      break;
  }

    // case LOAD_DRIVERS: {
    //   // console.log('Heyy changement de statut');

    //   axios
    //     .get('/compagny/drivers')
    //     .then((response) => {
    //       const { data } = response.data;
    //       // Filtre les chauffeurs reçus pour ne retenir que ceux appartenant à l'entreprise
    //       const drivers = data.filter(driver => driver.compagny_id === '1');

    //       // Je dispatch les chauffeurs dans le store
    //       store.dispatch(driversList(drivers));
    //     })
    //     .catch((error) => {
    //       // console.log('error de get');
    //       console.error(error);
    //     });
    //   break;
    // }

    // case SAVE_DRIVER: {
    //   // Récupération du nouveau chauffeur transmis dans l'action creator
    //   const { newDriver } = action;

    //   // Envoi du nouveau chauffeur au serveur
      // axios
      //   .post('/compagny/drivers/add', { ...newDriver })
      //   .then((response) => {
      //   // Recharge la liste des chauffeurs depuis la base
      //   // ( avec tous leurs champs, notament _id qui va permettre la modification ).
      //     store.dispatch(loadDrivers());
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    //   break;
    // }

    // case SAVE_EDITED_DRIVER: {
    //   // Récupération de l'id du chauffeur, transmise dans l'action creator
    //   // pour la route et pour la récupération du chauffeur modifié
    //   const { id } = action;
    //   // Récupération du chauffeur modifié
    //   const state = store.getState();
    //   const { drivers } = state.reducerCompagny;
    //   const editedDriver = drivers.find(driver => driver.id === id);

    //   // Envoi du chaffeur modifié au serveur
    //   axios
    //     .put(`/compagny/drivers/${id}/edit`, { ...editedDriver })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;
    // }

    // case REMOVE_DRIVER: {
    //   // Récupération du chauffeur à retirer de l'entreprise
    //   const { id } = action;
    //   const state = store.getState();
    //   const { drivers } = state.reducerCompagny;

    //   const removedDriver = drivers.find(driver => driver.id === id);

    //   // Envoi au serveur qui se chargera de mettre compagny_id à 0
    //   axios
    //     .put(`/compagny/drivers/${id}/remove`, { ...removedDriver })
    //     .then((response) => {
    //       // Rechargement de la liste des chauffeurs
    //       store.dispatch(loadDrivers());
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   break;
    // }

    // default:
    //   break;

  // Passe à ton voisin
  next(action);
};

/**
 * Export
 */
export default ajaxSocial;
