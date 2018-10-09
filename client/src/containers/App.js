/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  connected: state.reducerRegister.connected,
  role: state.reducerRegister.currentUser.role,
  userCompagnyID: state.reducerRegister.currentUser.compagny_id,
});

/* === Actions === */
const mapDispatchToProps = {};

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/**
 * Export
 */
export default withRouter(AppContainer);
