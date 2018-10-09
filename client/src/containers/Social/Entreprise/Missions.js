/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Missions from 'src/components/Social/Entreprise/Missions';

// Action Creators
import { loadDriverMissions, loadDriverMissionsAuto, loadDriverDrivers } from 'src/store/reducers/reducerSocial';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  missionsStatus: state.reducerSocial.driverMissionsStatus,
  driversStatut: state.reducerSocial.driverDriversStatus,
  missionsList: state.reducerSocial.missionsList,
  userId: state.reducerRegister.currentUser.id,
  compagnyId: state.reducerRegister.currentUser.compagny_id,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadDriverMissions: (userId) => {
    dispatch(loadDriverMissions(userId));
  },
  loadDriverDrivers: (compagnyId) => {
    dispatch(loadDriverDrivers(compagnyId));
  },
  loadDriverMissionsAuto: (compagnyId) => {
    dispatch(loadDriverMissionsAuto(compagnyId));
  },
});

// Container
const MissionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Missions);

/**
 * Export
 */
export default MissionsContainer;
