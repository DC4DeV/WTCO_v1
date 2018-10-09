/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Composants

// Styles et assets
import './editdriverform.sass';

/**
 * Code
 */
class EditDriverForm extends React.Component {
  static propTypes = {
    driver: PropTypes.object.isRequired,
    onEditDriver: PropTypes.func.isRequired,
    onSaveEditedDriver: PropTypes.func.isRequired,
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    const { onEditDriver, onSaveEditedDriver, driver } = this.props;

    const editedDriver = {
      lastName: evt.target.lastName.value,
      firstName: evt.target.firstName.value,
      mail: evt.target.mail.value,
      birthdate: evt.target.birthdate.value,
      sexe: evt.target.sexe.value,
      nationality: evt.target.nationality.value,
      adress: evt.target.adress.value,
      nss: evt.target.nss.value,
      licence: evt.target.licence.value,
      licenceValidity: evt.target.licenceValidity.value,
      fcosValidity: evt.target.fcosValidity.value,
    };

    onEditDriver(editedDriver);
    onSaveEditedDriver();

    this.props.history.push(`/compagny/drivers/${driver.id}`);
  }

  render() {
    const {
      driver,
    } = this.props;

    return (
      <div id="driver-edit">
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-4 col-form-label col-form-label-sm">Nom:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="lastName"
                name="lastName"
                placeholder={driver.last_name}
                defaultValue={driver.last_name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="firstName" className="col-sm-4 col-form-label col-form-label-sm">Prénom:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="firstName"
                name="firstName"
                placeholder={driver.first_name}
                defaultValue={driver.first_name}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="mail" className="col-sm-4 col-form-label col-form-label-sm">Mail:</label>
            <div className="col-sm-8">
              <input
                type="email"
                className="form-control form-control-sm"
                id="mail"
                name="mail"
                placeholder={driver.mail}
                defaultValue={driver.mail}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="birthdate" className="col-sm-4 col-form-label col-form-label-sm">Date de naissance:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="birthdate"
                name="birthdate"
                placeholder={driver.birthdate}
                defaultValue={driver.birthdate}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label col-form-label-sm">Sexe:</label>
            <div className="col-sm-8 text-left form-control-sm">
              <div className="form-check form-check-inline mx-4">
                <label htmlFor="sexeM" className="form-check-label mr-1">M</label>
                <input
                  id="sexeM"
                  type="radio"
                  name="sexe"
                  defaultChecked={driver.sexe === 'M'}
                  value="M"
                />
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="sexeF" className="form-check-label mr-1">F</label>
                <input
                  id="sexeF"
                  type="radio"
                  name="sexe"
                  defaultChecked={driver.sexe === 'F'}
                  value="F"
                />
              </div>
            </div>

          </div>
          <div className="form-group row">
            <label htmlFor="nationality" className="col-sm-4 col-form-label col-form-label-sm">Nationalité:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="nationality"
                name="nationality"
                placeholder={driver.nationality}
                defaultValue={driver.nationality}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="adress" className="col-sm-4 col-form-label col-form-label-sm">Adresse:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="adress"
                name="adress"
                placeholder={driver.adress}
                defaultValue={driver.adress}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="nss" className="col-sm-4 col-form-label col-form-label-sm">N° de Sécurité sociale:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="nss"
                name="nss"
                placeholder={driver.nss}
                defaultValue={driver.nss}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="licence" className="col-sm-4 col-form-label col-form-label-sm">N° de permis de conduire:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="licence"
                name="licence"
                placeholder={driver.licence}
                defaultValue={driver.licence}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="licenceValidity" className="col-sm-4 col-form-label col-form-label-sm">Validité du permis:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="licenceValidity"
                name="licenceValidity"
                placeholder={driver.licence_validity}
                defaultValue={driver.licence_validity}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="fcosValidity" className="col-sm-4 col-form-label col-form-label-sm">Validité de la FCOS:</label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="fcosValidity"
                name="fcosValidity"
                placeholder={driver.fcos}
                defaultValue={driver.fcos}
              />
            </div>
          </div>
          {/* <div className=""> */}
            <button className="validate-button" type="submit">Valider</button>
          {/* </div> */}
        </form>
      </div>
    );
  }
}

/**
 * Export
 */
export default EditDriverForm;
