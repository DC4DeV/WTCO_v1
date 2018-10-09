/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducers from 'src/store/reducers';

import ajaxPro from './middleWare/ajaxProMiddleware';
import ajaxSocial from './middleWare/ajaxSocialMiddleware';
import ajaxRegister from './middleWare/ajaxRegisterMiddleware';

/*
 * Code
 */
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// applyMiddleware applique le middleware dans le parcours de l'action
const appliedMiddleware = applyMiddleware(ajaxPro, ajaxSocial, ajaxRegister);

// J'assemble les middlewares et les outils de dev
const enhancers = compose(appliedMiddleware, ...devTools);

// Je transmets à mon store les middlewares / enhancers
const store = createStore(reducers, enhancers);

/*
 * Export
 */
export default store;
