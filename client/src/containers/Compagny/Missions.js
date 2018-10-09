/**
 * Npm import
 */
import { connect } from 'react-redux';
import withMobile from 'src/hoc/withMobile';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Missions from 'src/components/Compagny/Missions';

// Action Creators
// import { doSomething } from 'src/store/reducer';
import { loadMissions, loadMissionsAuto } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = state => ({
  missions: state.reducerCompagny.missions,
  missionsStatus: state.reducerCompagny.missionsStatus,
});

/* === Actions === */

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadMissions: () => {
    dispatch(loadMissions());
  },
  loadMissionsAuto: () => {
    dispatch(loadMissionsAuto());
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const MissionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Missions);

/**
 * Export
 */

export default withMobile(withRouter(MissionsContainer), 768);
