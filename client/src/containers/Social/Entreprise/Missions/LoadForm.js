/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoadForm from 'src/components/Social/Entreprise/Missions/LoadForm';

// Action Creators
import { editMission } from 'src/store/reducers/reducerSocial';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  missionsList: state.reducerSocial.missionsList,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onEditdMission: (editedMission) => {
    dispatch(editMission(editedMission));
  },
});

// Container
const LoadFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadForm);

/**
 * Export
 */
export default LoadFormContainer;
