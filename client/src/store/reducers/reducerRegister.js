/**
 * Initial State
 */
const initialState = {
  compagnyAdded: false,
  connectError: null,
  connected: false,
  currentUser: {
    id: '',
    role: '',
    compagny_id: '',
  },
};

/**
 * Types
 */
export const ADD_COMPAGNY = 'ADD_COMPAGNY';
const COMPAGNY_ADDED = 'COMPAGNY_ADDED';
const TOGGLE_COMPAGNY_ADDED = 'TOGGLE_COMPAGNY_ADDED';

export const CHECK_USER = 'CHECK_USER';
const CONNECT_USER = 'CONNECT_USER';
const DISCONNECT = 'DISCONNECT';
const DISPLAY_ERROR = 'DISPLAY_ERROR';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducerRegister = (state = initialState, action = {}) => {
  switch (action.type) {
    case COMPAGNY_ADDED: {
      return {
        ...state,
        compagnyAdded: true,
      };
    }

    case TOGGLE_COMPAGNY_ADDED: {
      return {
        ...state,
        compagnyAdded: !state.compagnyAdded,
      };
    }

    case CONNECT_USER: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.user,
        },
        connected: true,
      };
    }

    case DISCONNECT: {
      return initialState;
    }

    case DISPLAY_ERROR: {
      return {
        ...state,
        connectError: action.error,
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const addCompagny = newCompagny => ({
  type: ADD_COMPAGNY,
  newCompagny,
});

export const compagnyAdded = () => ({
  type: COMPAGNY_ADDED,
});

export const toggleCompagnyAdded = () => ({
  type: TOGGLE_COMPAGNY_ADDED,
});

export const checkUser = user => ({
  type: CHECK_USER,
  user,
});

export const disconnect = () => ({
  type: DISCONNECT,
}); 

export const connectUser = user => ({
  type: CONNECT_USER,
  user,
});

export const displayError = error => ({
  type: DISPLAY_ERROR,
  error,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducerRegister;
