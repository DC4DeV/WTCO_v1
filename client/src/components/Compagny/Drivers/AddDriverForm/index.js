/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
/**
 * Local import
 */
// Composants

// Styles et assets
import './addform.sass';

/**
 * Code
 */
class AddForm extends React.Component {
  static propTypes = {
    compagnyId: PropTypes.string.isRequired,
    lastNameValue: PropTypes.string,
    firstNameValue: PropTypes.string,
    mailValue: PropTypes.string,
    birthdateValue: PropTypes.string,
    sexeValue: PropTypes.string,
    nationalityValue: PropTypes.string,
    adressValue: PropTypes.string,
    nssValue: PropTypes.string,
    licenceValue: PropTypes.string,
    licenceValidityValue: PropTypes.string,
    fcosValidityValue: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onSaveDriver: PropTypes.func.isRequired,
  }

  static defaultProps = {
    lastNameValue: '',
    firstNameValue: '',
    mailValue: '',
    birthdateValue: '',
    sexeValue: '',
    nationalityValue: '',
    adressValue: '',
    nssValue: '',
    licenceValue: '',
    licenceValidityValue: '',
    fcosValidityValue: '',
  }

  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    const { onInputChange } = this.props;

    onInputChange(name, value);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { onSaveDriver } = this.props;

    // Sauve le chauffeur en base
    const {
      compagnyId,
      lastNameValue,
      firstNameValue,
      mailValue,
      birthdateValue,
      sexeValue,
      nationalityValue,
      adressValue,
      nssValue,
      licenceValue,
      licenceValidityValue,
      fcosValidityValue,
    } = this.props;

    const newDriver = {
      id: uuidv4(),
      compagny_id: compagnyId,
      role: 'driver',
      last_name: lastNameValue,
      first_name: firstNameValue,
      mail: mailValue,
      birthdate: birthdateValue,
      sexe: sexeValue,
      nationality: nationalityValue,
      adress: adressValue,
      nss: nssValue,
      licence: licenceValue,
      licence_validity: licenceValidityValue,
      fcos: fcosValidityValue,
    };

    onSaveDriver(newDriver);

    // Reviens sur la page de gestion de chauffeurs
    this.props.history.push('/compagny/drivers');
  }

  render() {
    const {
      lastNameValue,
      firstNameValue,
      mailValue,
      birthdateValue,
      nationalityValue,
      adressValue,
      nssValue,
      licenceValue,
      licenceValidityValue,
      fcosValidityValue,
    } = this.props;

    return (
      <div id="drivers-add">
        <h4>Ajout d'un chauffeur</h4>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label htmlFor="lastName" className="col-sm-4 col-form-label col-form-label-sm">Nom:<span> *</span></label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control form-control-sm"
                id="lastName"
                name="lastName"
                placeholder="Nom"
                value={lastNameValue}
                onChange={this.handleInputChange}
                required
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
                placeholder="Prénom"
                value={firstNameValue}
                onChange={this.handleInputChange}
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
                placeholder="adresse mail"
                value={mailValue}
                onChange={this.handleInputChange}
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
                placeholder="Date de naissance:"
                value={birthdateValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label col-form-label-sm">Sexe:</label>
            <div className="col-sm-8 text-left form-control-sm">
              <div className="form-check form-check-inline mx-4">
                <label htmlFor="sexeM" className="form-check-label mr-1">M</label>
                <input
                  id="sexe"
                  type="radio"
                  name="sexe"
                  onChange={this.handleInputChange}
                  value="M"
                />
              </div>
              <div className="form-check form-check-inline">
                <label htmlFor="sexeF" className="form-check-label mr-1">F</label>
                <input
                  id="sexe"
                  type="radio"
                  name="sexe"
                  onChange={this.handleInputChange}
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
                placeholder="Nationalité"
                value={nationalityValue}
                onChange={this.handleInputChange}
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
                placeholder="Adresse"
                value={adressValue}
                onChange={this.handleInputChange}
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
                placeholder="N° de Sécurité Sociale"
                value={nssValue}
                onChange={this.handleInputChange}
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
                placeholder="N° de permis de conduire"
                value={licenceValue}
                onChange={this.handleInputChange}
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
                placeholder="Date de validité du permis"
                value={licenceValidityValue}
                onChange={this.handleInputChange}
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
                placeholder="Date de validité FCOS"
                value={fcosValidityValue}
                onChange={this.handleInputChange}
              />
            </div>
          </div>

          <div className="">
            <button className="validate-button" type="submit">Valider</button>
          </div>
        </form>

      </div>
    );
  }
}

/**
 * Export
 */
export default AddForm;
