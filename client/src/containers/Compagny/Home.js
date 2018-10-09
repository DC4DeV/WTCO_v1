/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Home from 'src/components/Compagny/Home';

// Action Creators
import { loadDrivers, loadMissions } from 'src/store/reducers/reducerCompagny';
// import { doSomething } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  drivers: state.reducerCompagny.drivers,
  missions: state.reducerCompagny.missions,
  driversStatus: state.reducerCompagny.driversStatus,
  missionsStatus: state.reducerCompagny.missionsStatus,
});

/* === Actions === */

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadDrivers, loadMissions }, dispatch),
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

/**
 * Export
 */

export default HomeContainer;
