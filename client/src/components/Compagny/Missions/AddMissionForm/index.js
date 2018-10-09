/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import { Link } from 'react-router-dom';
import {
  Form,
  Text,
  Select,
  TextArea,
} from 'react-form';
/**
 * Local import
 */
// Composants

// Styles et assets
import './addform.sass';

/**
 * Code
 */
class AddMissionForm extends React.Component {
  static propTypes = {
    compagnyId: PropTypes.string.isRequired,
    drivers: PropTypes.array.isRequired,
    vehicles: PropTypes.array.isRequired,
    onAddMission: PropTypes.func.isRequired,
    loadDrivers: PropTypes.func.isRequired,
  }

  static defaultProps = {
  }

  componentDidMount() {
    const { drivers, loadDrivers } = this.props;

    // Charge la liste des chauffeurs depuis la base si elle n'est pas présente
    // pour les <Select>
    if (drivers.length < 1) loadDrivers();
  }

  handleSubmit = (submittedValues) => {
    const { compagnyId } = this.props;
    // Prépare la nouvelle mission en lui ajoutant un id et l'id de l'entreprise
    const newMission = {
      id: uuidv4(),
      compagny_id: compagnyId,
      ...submittedValues,
    };

    const { onAddMission } = this.props;
    onAddMission(newMission);

    this.props.history.push('/compagny/missions');
  }

  render() {
    const { drivers, vehicles } = this.props;

    // Prépare les <Select>
    const driversList = drivers.map(driver => ({
      label: `${driver.first_name} ${driver.last_name}`,
      value: `${driver.id}`,
    }));

    const VehiclesList = vehicles.filter(vehicle => vehicle.type !== 'Sem');
    const vehiclesSelect = VehiclesList.map(vehicle => ({
      label: `${vehicle.plate}`,
      value: `${vehicle.id}`,
    }));

    const trailorsList = vehicles.filter(vehicle => vehicle.type === 'Sem');
    const trailorsSelect = trailorsList.map(vehicle => ({
      label: `${vehicle.plate}`,
      value: `${vehicle.id}`,
    }));

    return (
      <div id="missions-add">
        <Form onSubmit={submittedValues => this.handleSubmit(submittedValues)}>
          {formApi => (
            <React.Fragment>
              <div className="d-flex justify-content-between">
                <Link to="/compagny/missions" className="d-none d-md-block mb-3 back-button">
                  Retour
                </Link>
                <button className="d-block mb-3 ml-auto reset-button" type="button" onClick={formApi.resetAll}>
                  Effacer
                </button>
              </div>
              <h4>Ajout d'une mission</h4>
              <form onSubmit={formApi.submitForm}>
                <div className="form-group row no-gutters">
                  <label htmlFor="loadingPlace" className="col-sm-4 col-form-label col-form-label-sm">Chargement chez:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="loadingPlace"
                      placeholder="Nom"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="loadingAdress" className="col-sm-4 col-form-label col-form-label-sm">Adresse:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="loadingAdress"
                      placeholder="Adresse de chargement"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="loadingPostCode" className="col-sm-4 col-form-label col-form-label-sm">Code Postal:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="loadingPostCode"
                      placeholder="Code postal du lieu de chargement"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="loadingCity" className="col-sm-4 col-form-label col-form-label-sm">Ville:</label>
                  <div className="col-sm-7 col-md ">
                    <Text
                      className="form-control form-control-sm"
                      field="loadingCity"
                      placeholder="Ville du lieu de chargement"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col d-sm-flex no-gutters">
                    <label htmlFor="loadingDate" className="col-12 col-sm-8 mr-2 col-form-label col-form-label-sm">le:</label>
                    <div className="col-12 col-sm no-gutters">
                      <Text
                        className="form-control form-control-sm"
                        field="loadingDate"
                        placeholder="Date de chargement"
                      />
                    </div>
                  </div>
                  <div className="col no-gutters d-sm-flex mb-4">
                    <label htmlFor="loadingHour" className="col-12 col-sm-4 col-form-label col-form-label-sm">à:</label>
                    <div className="col-12 col-sm-4">
                      <Text
                        className="form-control form-control-sm"
                        field="loadingHour"
                        placeholder="Heure de chargement"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group row no-gutters">
                  <label htmlFor="unloadingPlace" className="col-sm-4 col-form-label col-form-label-sm">Déchargement chez:</label>
                  <div className="col-sm-7 col-md ">
                    <Text
                      className="form-control form-control-sm"
                      field="unloadingPlace"
                      placeholder="Nom"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="unloadingAdress" className="col-sm-4 col-form-label col-form-label-sm">Adresse:</label>
                  <div className="col-sm-7 col-md ">
                    <Text
                      className="form-control form-control-sm"
                      field="unloadingAdress"
                      placeholder="Adresse de déchargement"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="unloadingPostCode" className="col-sm-4 col-form-label col-form-label-sm">Code Postal:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="unloadingPostCode"
                      placeholder="Code postal du lieu de déchargement"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="unloadingCity" className="col-sm-4 col-form-label col-form-label-sm">Ville:</label>
                  <div className="col-sm-7 col-md ">
                    <Text
                      className="form-control form-control-sm"
                      field="unloadingCity"
                      placeholder="Ville du lieu de déchargement"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col d-sm-flex no-gutters">
                    <label htmlFor="unloadingDate" className="col-12 col-sm-8 mr-2 col-form-label col-form-label-sm">le:</label>
                    <div className="col-12 col-sm no-gutters">
                      <Text
                        className="form-control form-control-sm"
                        field="unloadingDate"
                        placeholder="Date de déchargement"
                      />
                    </div>
                  </div>
                  <div className="col no-gutters d-sm-flex mb-4">
                    <label htmlFor="unloadingHour" className="col-12 col-sm-4 col-form-label col-form-label-sm">à:</label>
                    <div className="col-12 col-sm-4">
                      <Text
                        className="form-control form-control-sm"
                        field="unloadingHour"
                        placeholder="Heure de déchargement"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm">Chauffeur(s):</label>
                  <div className="col-sm-7 col-md ">
                    <Select
                      id="select-driver1"
                      className="form-control form-control-sm"
                      placeholder="chauffeur 1"
                      field="driver1"
                      options={[{ label: 'Aucun', value: '' }, ...driversList]}
                    />
                    <Select
                      id="select-driver2"
                      className="form-control form-control-sm"
                      placeholder="chauffeur 2"
                      field="driver2"
                      options={[{ label: 'Aucun', value: '' }, ...driversList]}
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="" className="col-sm-4 col-form-label col-form-label-sm">Véhicule(s):</label>
                  <div className="col-sm-7 col-md ">
                    <Select
                      id="vehicle"
                      className="form-control form-control-sm"
                      placeholder="véhicule"
                      field="vehicle"
                      options={[{ label: 'Aucun', value: '' }, ...vehiclesSelect]}
                    />
                    <Select
                      id="trailor"
                      className="form-control form-control-sm"
                      placeholder="remorque"
                      field="trailor"
                      options={[{ label: 'Aucune', value: '' }, ...trailorsSelect]}
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="comments" className="col-sm-4 col-form-label col-form-label-sm">Commentaires:</label>
                  <div className="col-sm-7 col-md ">
                    <TextArea
                      rows="5"
                      className="form-control form-control-sm"
                      field="comments"
                      placeholder="Commentaires"
                    />
                  </div>
                </div>

                <div className="">
                  <button className="validate-button" type="submit">Envoyer</button>
                </div>
              </form>
            </React.Fragment>
          )}
        </Form>

      </div>
    );
  }
}

/**
 * Export
 */
export default AddMissionForm;
