/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import AddMissionForm from 'src/components/Compagny/Missions/AddMissionForm';

// Action Creators
import { addMission, loadDrivers } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  compagnyId: state.reducerRegister.currentUser.id,
  drivers: state.reducerCompagny.drivers,
  vehicles: state.reducerCompagny.vehicles,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onAddMission: (submittedValues) => {
    dispatch(addMission(submittedValues));
  },
  loadDrivers: () => {
    dispatch(loadDrivers());
  },
});

// Container
const AddMissionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMissionForm);

/**
 * Export
 */
export default withRouter(AddMissionFormContainer);
