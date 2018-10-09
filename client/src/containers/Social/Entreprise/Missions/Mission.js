/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Mission from 'src/components/Social/Entreprise/Missions/Mission';

// Action Creators
import { loadDriverMissions, loadDriverDrivers } from 'src/store/reducers/reducerSocial';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  missionsList: state.reducerSocial.missionsList,
  missionsStatus: state.reducerSocial.driverMissionsStatus,
  driversList: state.reducerSocial.driversList,
  driversStatus: state.reducerSocial.driverDriversStatus,
  vehiclesList: state.reducerSocial.vehiclesList,
  compagnyId: state.reducerRegister.currentUser.compagny_id,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadDriverMissions: () => {
    dispatch(loadDriverMissions());
  },
  loadDriverDrivers: (compagnyId) => {
    dispatch(loadDriverDrivers(compagnyId));
  },
});

// Container
const MissionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mission);

/**
 * Export
 */
export default MissionContainer;
