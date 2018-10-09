/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import MissionDetails from 'src/components/Compagny/Missions/Mission/MissionDetails';

// Action Creators
import { loadDrivers } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  driversList: state.reducerCompagny.drivers,
  driversStatus: state.reducerCompagny.driversStatus,
  vehiclesList: state.reducerCompagny.vehicles,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  loadDrivers: () => {
    dispatch(loadDrivers());
  },
});

// Container
const MissionDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MissionDetails);

/**
 * Export
 */
export default withRouter(MissionDetailsContainer);
