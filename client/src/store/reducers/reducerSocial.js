
import uuidv4 from 'uuid/v4';

import vehicles from 'src/datas/vehicles';

const dateTime = require('date-time');
/**
 * Initial State
 */
const initialState = {
  articlesStatus: '',
  driverMissionsStatus: '',
  driverDriversStatus: '',
  viewAddArticle: false,
  title: '',
  content: '',
  articles: [
    // {
    //   id: uuidv4(),
    //   title: 'Premier message',
    //   author: 'Joe Dalton',
    //   date: dateTime({ local: true }),
    //   content: 'Merci Guillaume, grâce à toi et tes 71 photos, on va tous trouver nos camions moches, vraiment merci, tu nous pourri la journée',
    //   nbComments: 2,
    // },
    // {
    //   id: uuidv4(),
    //   title: 'Deuxième message',
    //   author: 'Jack Dalton',
    //   date: dateTime({ local: true }),
    //   content: 'On va tous trouver nos camions moches, vraiment merci, tu nous pourri la journée',
    //   nbComments: 6,
    // },
  ],
  missionsList: [],
  driversList: [],
  vehiclesList: vehicles,
};

/**
 * Types
 */
export const LOAD_ARTICLES = 'LOAD_ARTICLES';
const ARTICLES_LIST = 'ARTICLES_LIST';
const SHOW_VIEW_ADD_ARTICLE = 'SHOW_VIEW_ADD_ARTICLE';
export const ADD_ARTICLE = 'ADD_ARTICLE';
const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

export const LOAD_DRIVER_MISSIONS = 'LOAD_DRIVER_MISSIONS';
export const LOAD_DRIVER_MISSIONS_AUTO = 'LOAD_DRIVER_MISSIONS_AUTO';
const DRIVER_MISSIONS_LIST = 'DRIVER_MISSIONS_LIST';
export const EDIT_DRIVER_MISSION = 'EDIT_DRIVER_MISSION';
export const LOAD_DRIVER_DRIVERS = 'LOAD_DRIVER_DRIVERS';
const DRIVER_DRIVERS_LIST = 'DRIVER_DRIVERS_LIST';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_VIEW_ADD_ARTICLE: {
      return {
        ...state,
        viewAddArticle: !state.viewAddArticle,
        title: '',
        content: '',
      };
    }
    case LOAD_ARTICLES: {
      return {
        ...state,
        articlesStatus: 'loading',
      };
    }
    case ARTICLES_LIST: {
      return {
        ...state,
        articles: action.articles,
        articlesStatus: 'loaded',
      };
    }

    case ON_INPUT_CHANGE: {
      return {
        ...state,
        [action.nameInput]: action.inputValue,
        viewAddArticle: true,
      };
    }
    // case ADD_ARTICLE: {
    //   const newArticle = {
    //     id: uuidv4(),
    //     title: state.title,
    //     author: 'nouvel auteur',
    //     date: dateTime({ local: true }),
    //     content: state.content,
    //     nbComments: 0,
    //   };
    //   return {
    //     ...state,
    //     articles: [...state.articles, newArticle],
    //     viewAddArticle: false,
    //   };
    // }

    case LOAD_DRIVER_MISSIONS: {
      return {
        ...state,
        driverMissionsStatus: 'loading',
      };
    }

    case DRIVER_MISSIONS_LIST: {
      return {
        ...state,
        missionsList: action.missions,
        driverMissionsStatus: 'loaded',
      };
    }

    case EDIT_DRIVER_MISSION: {
      return {
        ...state,
        driverMissionsStatus: 'updating',
      };
    }

    case LOAD_DRIVER_DRIVERS: {
      return {
        ...state,
        driverDriversStatus: 'loading',
      };
    }

    case DRIVER_DRIVERS_LIST: {
      return {
        ...state,
        driversList: action.drivers,
        driverDriversStatus: 'loaded',
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const showViewAddArticle = () => ({
  type: SHOW_VIEW_ADD_ARTICLE,
});
export const addArticle = newArticle => ({
  type: ADD_ARTICLE,
  newArticle,
});
export const onInputChange = (nameInput, inputValue) => ({
  type: ON_INPUT_CHANGE,
  nameInput,
  inputValue,
});
export const loadArticles = () => ({
  type: LOAD_ARTICLES,
});

export const articlesList = articles => ({
  type: ARTICLES_LIST,
  articles,
});

export const loadDriverMissions = userId => ({
  type: 'LOAD_DRIVER_MISSIONS',
  userId,
});

export const loadDriverMissionsAuto = userId => ({
  type: 'LOAD_DRIVER_MISSIONS_AUTO',
  userId,
});

export const driverMissionsList = missions => ({
  type: DRIVER_MISSIONS_LIST,
  missions,
});

export const editMission = editedMission => ({
  type: 'EDIT_DRIVER_MISSION',
  editedMission,
});

export const loadDriverDrivers = compagnyId => ({
  type: 'LOAD_DRIVER_DRIVERS',
  compagnyId,
});

export const driverDriversList = drivers => ({
  type: 'DRIVER_DRIVERS_LIST',
  drivers,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
