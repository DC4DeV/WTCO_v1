// import drivers from 'src/datas/drivers';
// import missions from 'src/datas/missions';
import vehicles from 'src/datas/vehicles';

/**
 * Initial State
 */
const initialState = {
  // drivers,
  // missions,
  vehicles,
  driversStatus: '',
  missionsStatus: '',
  drivers: [],
  missions: [],
  addDriverForm: {
    lastName: '',
    firstName: '',
    mail: '',
    birthdate: '',
    sexe: '',
    nationality: '',
    adress: '',
    nss: '',
    licence: '',
    licenceValidity: '',
    fcosValidity: '',
  },
};

/**
 * Types
 */
const CHANGE_INPUT_FORM = 'CHANGE_INPUT_FORM';

export const LOAD_DRIVERS = 'LOAD_DRIVERS';
const DRIVERS_LIST = 'DRIVERS_LIST';
export const SAVE_DRIVER = 'SAVE_DRIVER';
const EDIT_DRIVER = 'EDIT_DRIVER';
export const SAVE_EDITED_DRIVER = 'SAVE_EDITED_DRIVER';
export const REMOVE_DRIVER = 'REMOVE_DRIVER';

export const LOAD_MISSIONS = 'LOAD_MISSIONS';
export const LOAD_MISSIONS_AUTO = 'LOAD_MISSIONS_AUTO';
const MISSIONS_LIST = 'MISSIONS_LIST';
export const ADD_MISSION = 'ADD_MISSION';
export const REMOVE_MISSION = 'REMOVE_MISSION';
/**
 * Traitements
 */

/**
 * Reducer
 */
const reducerCompagny = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_FORM:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.field]: action.value,
        },
      };

    case LOAD_DRIVERS: {
      return {
        ...state,
        driversStatus: 'loading',
      };
    }

    case DRIVERS_LIST:
      return {
        ...state,
        drivers: action.drivers,
        driversStatus: 'loaded',
      };

    case SAVE_DRIVER: {
      return {
        ...state,
        driversStatus: 'updating',
        addDriverForm: {
          lastName: '',
          firstName: '',
          mail: '',
          birthdate: '',
          sexe: '',
          nationality: '',
          adress: '',
          nss: '',
          licence: '',
          licenceValidity: '',
          fcosValidity: '',
        },
      };
    }

    case EDIT_DRIVER: {
      const editedDrivers = state.drivers.map((driver) => {
        if (driver.id === action.id) {
          return {
            ...driver,
            last_name: action.driver.lastName,
            first_name: action.driver.firstName,
            mail: action.driver.mail,
            birthdate: action.driver.birthdate,
            sexe: action.driver.sexe,
            adress: action.driver.adress,
            nationality: action.driver.nationality,
            nss: action.driver.nss,
            licence: action.driver.licence,
            licence_validity: action.driver.licenceValidity,
            fcos: action.driver.fcosValidity,
          };
        }
        return driver;
      });
      return {
        ...state,
        driversStatus: 'updating',
        drivers: editedDrivers,
      };
    }

    case REMOVE_DRIVER: {
      return {
        ...state,
        driversStatus: 'updating',
      };
    }

    case LOAD_MISSIONS: {
      return {
        ...state,
        missionsStatus: 'loading',
      };
    }

    case MISSIONS_LIST: {
      return {
        ...state,
        missions: action.missions,
        missionsStatus: 'loaded',
      };
    }

    case ADD_MISSION: {
      return {
        ...state,
        missionsStatus: 'updating',
      };
    }

    case REMOVE_MISSION: {
      return {
        ...state,
        missionsStatus: 'updating',
      };
    }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const changeInputForm = (form, field, value) => ({
  type: CHANGE_INPUT_FORM,
  form,
  field,
  value,
});

export const loadDrivers = () => ({
  type: LOAD_DRIVERS,
});

export const driversList = drivers => ({
  type: DRIVERS_LIST,
  drivers,
});

export const saveDriver = newDriver => ({
  type: SAVE_DRIVER,
  newDriver,
});

export const editDriver = (driver, id) => ({
  type: EDIT_DRIVER,
  driver,
  id,
});

export const saveEditedDriver = id => ({
  type: SAVE_EDITED_DRIVER,
  id,
});

export const removeDriver = id => ({
  type: REMOVE_DRIVER,
  id,
});

export const loadMissions = () => ({
  type: LOAD_MISSIONS,
});

export const loadMissionsAuto = () => ({
  type: LOAD_MISSIONS_AUTO,
});

export const missionsList = missionList => ({
  type: MISSIONS_LIST,
  missions: missionList,
});

export const addMission = newMission => ({
  type: ADD_MISSION,
  newMission,
});

export const removeMission = id => ({
  type: REMOVE_MISSION,
  id,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducerCompagny;
