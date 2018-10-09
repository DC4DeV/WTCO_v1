/**
 * Npm import
 */
import { connect } from 'react-redux';
import withMobile from 'src/hoc/withMobile';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Drivers from 'src/components/Compagny/Drivers';

// Action Creators
import { loadDrivers } from 'src/store/reducers/reducerCompagny';
// import { doSomething } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  drivers: state.reducerCompagny.drivers,
  status: state.reducerCompagny.driversStatus,
});

/* === Actions === */
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadDrivers }, dispatch),
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const DriversContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Drivers);

/**
 * Export
 */

export default withMobile(withRouter(DriversContainer), 768);
