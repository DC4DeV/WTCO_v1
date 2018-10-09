/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import RemoveMission from 'src/components/Compagny/Missions/RemoveMission';

// Action Creators
import { removeMission } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveMission: () => {
    dispatch(removeMission(ownProps.mission._id));
  },
});

// Container
const RemoveMissionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveMission);

/**
 * Export
 */
export default RemoveMissionContainer;
