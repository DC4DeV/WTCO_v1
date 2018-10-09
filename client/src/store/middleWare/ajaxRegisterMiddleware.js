/**
 * npm import
 */
import axios from 'axios';

/**
 * Local import
 */
// Actions
import {
  ADD_COMPAGNY,
  compagnyAdded,
  CHECK_USER,
  connectUser,
  displayError,
} from '../reducers/reducerRegister';

axios.defaults.baseURL = 'http://localhost:3001/api';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * Code
 */
const ajaxRegister = store => next => (action) => {
  switch (action.type) {
    case ADD_COMPAGNY: {
      const { newCompagny } = action;

      axios
        .post('/register/addCompagny', { ...newCompagny })
        .then((response) => {
          console.log('compagny added');
          store.dispatch(compagnyAdded());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }

    case CHECK_USER: {
      const { user } = action;
      // Va chercher dans la table des compagnies
      axios.get('/register/check', {
        params: {
          user: user.mail,
          password: user.password,
        },
      })
        .then((response) => {
          if (response.data.success) {
            // console.log('entreprise connectée:', response.data.data);
            store.dispatch(connectUser(response.data.data));
          }
          else {
            // Va chercher dans la table des drivers
            axios.get('/register/check2', {
              params: {
                user: user.mail,
                password: user.password,
              },
            })
              .then((response2) => {
                if (response2.data.success) {
                  // console.log('chauffeur connecté:', response2.data.data);
                  store.dispatch(connectUser(response2.data.data));
                }
                else {
                  store.dispatch(displayError(response2.data.error));
                }
              })
              .catch((error) => {
                console.error(error);
              });
          }
        })
        .catch((error) => {
          console.error(error);
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
export default ajaxRegister;
