/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import CompagnyForm from 'src/components/Accueil/Register/CompagnyForm';

// Action Creators
import { addCompagny, toggleCompagnyAdded } from 'src/store/reducers/reducerRegister';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  compagnyAdded: state.reducerRegister.compagnyAdded,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddCompagny: (newCompagny) => {
    dispatch(addCompagny(newCompagny));
  },
  toggleCompagnyAdded: () => {
    dispatch(toggleCompagnyAdded());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const CompagnyFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompagnyForm);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default CompagnyFormContainer;
