/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import EditDriverForm from 'src/components/Compagny/Drivers/EditDriverForm';

// Action Creators
import { editDriver, saveEditedDriver } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onEditDriver: (editedDriver) => {
    dispatch(editDriver(editedDriver, ownProps.driver.id));
  },
  onSaveEditedDriver: () => {
    dispatch(saveEditedDriver(ownProps.driver.id));
  },
});

// Container
const EditDriverFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditDriverForm);

/**
 * Export
 */
export default withRouter(EditDriverFormContainer);
