/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Text,
  TextArea,
} from 'react-form';
/**
 * Local import
 */
// Composants

// Styles et assets
import './loadform.sass';

/**
 * Code
 */
class loadForm extends React.Component {
  static propTypes = {
    missionsList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onEditdMission: PropTypes.func.isRequired,
  }

  getMissionById = (id) => {
    const { missionsList } = this.props;
    return (
      missionsList.find(mission => mission.id === id)
    );
  }

  handleSubmitLoaded = (submittedValues) => {
    const { match } = this.props;
    const { id } = match.params;

    const mission = this.getMissionById(id);

    // Prépare la nouvelle mission en lui ajoutant un id et l'id de l'entreprise
    const loadedMission = {
      loaded: true,
      ...mission,
      ...submittedValues,
    };

    const { onEditdMission } = this.props;
    onEditdMission(loadedMission);

    // Reviens sur la page des missions
    this.props.history.push('/social/entreprise/missions');
  }

  handleSubmitUnloaded = (submittedValues) => {
    const { match } = this.props;
    const { id } = match.params;

    const mission = this.getMissionById(id);

    // Prépare la nouvelle mission en lui ajoutant un id et l'id de l'entreprise
    const loadedMission = {
      unloaded: true,
      ...mission,
      ...submittedValues,
    };

    const { onEditdMission } = this.props;
    onEditdMission(loadedMission);

    // Reviens sur la page des missions
    this.props.history.push('/social/entreprise/missions');
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;

    const mission = this.getMissionById(id);

    return (
      <div id="mission-loaded">
        {!mission.loaded && (
          <Form onSubmit={submittedValues => this.handleSubmitLoaded(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm} className="mb-4">
                <h3 className="text-center mb-4">Chargement:</h3>
                <div className="form-group row no-gutters">
                  <label htmlFor="real_loading_date" className="col-sm-4 col-form-label col-form-label-sm">Date d'arrivée:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="real_loading_date"
                      placeholder="Date d'arrivée"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="arrival_loading_hour" className="col-sm-4 col-form-label col-form-label-sm">Heure d'arrivée:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="arrival_loading_hour"
                      placeholder="Heure d'arrivée"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="departure_loading_hour" className="col-sm-4 col-form-label col-form-label-sm">Heure de départ:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="departure_loading_hour"
                      placeholder="Heure de départ"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="km_loading" className="col-sm-4 col-form-label col-form-label-sm">Kilomètrage:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="km_loading"
                      placeholder="Kilomètrage"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="comment_load" className="col-sm-4 col-form-label col-form-label-sm">Commentaire:</label>
                  <div className="col-sm-7 col-md">
                    <TextArea
                      rows="3"
                      className="form-control form-control-sm"
                      field="comment_load"
                      placeholder="Commentaire"
                    />
                  </div>
                </div>
                <div className="">
                  <button className="validate-button btn btn-success" type="submit">Envoyer</button>
                </div>
              </form>
            )}
          </Form>
        )}
        {mission.loaded && !mission.unloaded && (
          <Form onSubmit={submittedValues => this.handleSubmitUnloaded(submittedValues)}>
            {formApi => (
              <form onSubmit={formApi.submitForm} className="mb-4">
                <h3 className="text-center mb-4">Déchargement:</h3>
                <div className="form-group row no-gutters">
                  <label htmlFor="real_unloading_date" className="col-sm-4 col-form-label col-form-label-sm">Date d'arrivée:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="real_unloading_date"
                      placeholder="Date d'arrivée"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="arrival_unloading_hour" className="col-sm-4 col-form-label col-form-label-sm">Heure d'arrivée:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="arrival_unloading_hour"
                      placeholder="Heure d'arrivée"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="departure_unloading_hour" className="col-sm-4 col-form-label col-form-label-sm">Heure de départ:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="departure_unloading_hour"
                      placeholder="Heure de départ"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="km_unloading" className="col-sm-4 col-form-label col-form-label-sm">Kilomètrage:</label>
                  <div className="col-sm-7 col-md">
                    <Text
                      className="form-control form-control-sm"
                      field="km_unloading"
                      placeholder="Kilomètrage"
                    />
                  </div>
                </div>
                <div className="form-group row no-gutters">
                  <label htmlFor="comment_unload" className="col-sm-4 col-form-label col-form-label-sm">Commentaire:</label>
                  <div className="col-sm-7 col-md">
                    <TextArea
                      rows="3"
                      className="form-control form-control-sm"
                      field="comment_unload"
                      placeholder="Commentaire"
                    />
                  </div>
                </div>
                <div>
                  <button className="validate-button btn btn-success" type="submit">Envoyer</button>
                </div>
              </form>
            )}
          </Form>
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default loadForm;
