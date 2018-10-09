/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Accueil from 'src/components/Accueil';

// Action Creators
// import { doSomething } from 'src/store/reducerCompagny';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  connectError: state.reducerRegister.connectError,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  // doSomething: () => {
  //   dispatch(doSomething());
  // },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const AccueilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accueil);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default AccueilContainer;
