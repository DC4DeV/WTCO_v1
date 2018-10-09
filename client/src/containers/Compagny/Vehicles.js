/**
 * Npm import
 */
import { connect } from 'react-redux';
import withMobile from 'src/hoc/withMobile';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Vehicles from 'src/components/Compagny/Vehicles';

// Action Creators
// import { doSomething } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  vehicles: state.reducerCompagny.vehicles,
});

/* === Actions === */

const mapDispatchToProps = {};

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const VehiclesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vehicles);

/**
 * Export
 */

export default withMobile(withRouter(VehiclesContainer), 768);
