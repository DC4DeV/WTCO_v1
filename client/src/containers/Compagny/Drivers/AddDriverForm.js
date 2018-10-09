/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import AddDriverForm from 'src/components/Compagny/Drivers/AddDriverForm';

// Action Creators
import { changeInputForm, addDriver, saveDriver } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = (state, ownProps) => ({
  compagnyId: state.reducerRegister.currentUser.id,
  lastNameValue: state.reducerCompagny.addDriverForm.lastName,
  firstNameValue: state.reducerCompagny.addDriverForm.firstName,
  mailValue: state.reducerCompagny.addDriverForm.mail,
  birthdateValue: state.reducerCompagny.addDriverForm.birthdate,
  sexeValue: state.reducerCompagny.addDriverForm.sexe,
  nationalityValue: state.reducerCompagny.addDriverForm.nationality,
  adressValue: state.reducerCompagny.addDriverForm.adress,
  nssValue: state.reducerCompagny.addDriverForm.nss,
  licenceValue: state.reducerCompagny.addDriverForm.licence,
  licenceValidityValue: state.reducerCompagny.addDriverForm.licenceValidity,
  fcosValidityValue: state.reducerCompagny.addDriverForm.fcosValidity,
});

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onInputChange: (field, value) => {
    dispatch(changeInputForm('addDriverForm', field, value));
  },
  onSaveDriver: (newDriver) => {
    dispatch(saveDriver(newDriver));
  },
});

// Container
const AddDriverFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddDriverForm);

/**
 * Export
 */
export default AddDriverFormContainer;
