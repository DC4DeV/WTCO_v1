/**
 * npm import
 */
import { combineReducers } from 'redux';
/**
 * Local import
 */
import reducerCompagny from 'src/store/reducers/reducerCompagny';
import reducerSocial from 'src/store/reducers/reducerSocial';
import reducerRegister from 'src/store/reducers/reducerRegister';


const reducers = combineReducers({
  reducerCompagny,
  reducerSocial,
  reducerRegister,
});

/**
 * Export
 */
export default reducers;
