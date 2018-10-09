/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import RemoveDriver from 'src/components/Compagny/Drivers/RemoveDriver';

// Action Creators
import { removeDriver } from 'src/store/reducers/reducerCompagny';

/* === State (données) === */
const mapStateToProps = null;

/* === Actions === */
const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemoveDriver: () => {
    dispatch(removeDriver(ownProps.driver.id));
  },
});

// Container
const RemoveDriverContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RemoveDriver);

/**
 * Export
 */
export default RemoveDriverContainer;
