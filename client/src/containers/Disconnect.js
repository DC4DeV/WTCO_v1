/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import Disconnect from 'src/components/Disconnect';

// Action Creators
import { disconnect } from 'src/store/reducers/reducerRegister';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({

});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  disconnect: () => {
    dispatch(disconnect());
  },
});

// Container
const DisconnectContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Disconnect);

/**
 * Export
 */
export default withRouter(DisconnectContainer);
