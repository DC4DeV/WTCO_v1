/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import FormAccueil from 'src/components/Accueil/FormAccueil';

// Action Creators
import { checkUser } from 'src/store/reducers/reducerRegister';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({

});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  checkUser: (user) => {
    dispatch(checkUser(user));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const FormAccueilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormAccueil);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default FormAccueilContainer;
