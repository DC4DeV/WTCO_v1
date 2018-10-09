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
} from 'react-form';
/**
 * Local import
 */
// Composants

// Styles et assets
import './register.sass';

/**
 * Code
 */
class AddCompagnyForm extends React.Component {
  static propTypes = {
    onAddCompagny: PropTypes.func.isRequired,
    compagnyAdded: PropTypes.bool.isRequired,
    toggleCompagnyAdded: PropTypes.func.isRequired,
  }

  state = {
    error: false,
  }

  handleSubmit = (submittedValues) => {
    const {
      name,
      mail,
      password,
      passwordConfirm,
    } = submittedValues;

    // Vérifications
    let errors = [];

    if (!name || !mail || !password || !passwordConfirm) {
      errors = [...errors, 'Les champs obligatoires doivent être renseignés'];
    }
    if (password.length < 8) {
      errors = [...errors, 'Le mot de passe doit faire au moins 8 caractères'];
    }
    if (password !== passwordConfirm) {
      errors = [...errors, 'La confirmation du mot de passe ne correspond pas au mot de passe'];
    }

    if (errors.length > 0) {
      this.setState({
        error: true,
        errors,
      });
    }
    else {
      this.setState({
        error: false,
      });
      // Prépare la nouvelle entreprise en lui ajoutant un id et le role 'compagny' pour les accès
      const newCompagny = {
        id: uuidv4(),
        role: 'compagny',
        ...submittedValues,
      };
      const { onAddCompagny } = this.props;
      onAddCompagny(newCompagny);
    }
  }

  render() {
    const { error, errors } = this.state;
    const { compagnyAdded, toggleCompagnyAdded } = this.props;

    return (
      <div id="add-compagny-form" className="p-1">
        <h2>formulaire d'inscription pour entreprise</h2>
        {!compagnyAdded && (
          <Form onSubmit={submittedValues => this.handleSubmit(submittedValues)}>
            {formApi => (
              <React.Fragment>
                <Link to="/">
                  <button className="btn mb-4" type="button" onClick={formApi.resetAll}>Annuler</button>
                </Link>

                {/* Affiche les erreurs s'il y'en a */}
                {error && (
                  <div className="col-11 bg-warning text-dark mb-3">
                    {errors.map(err => (
                      <p key={err}>{err}</p>
                    ))}
                  </div>
                )}
                
                <form onSubmit={formApi.submitForm}>
                  <div className="form-group row no-gutters">
                    <label htmlFor="name" className="col-sm-4 col-form-label col-form-label-sm">Nom de l'entreprise:<span className="text-danger"> *</span></label>
                    <div className="col-sm-7 col-md">
                      <Text
                        className="form-control form-control-sm"
                        field="name"
                        placeholder="Nom de l'entreprise"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="owner" className="col-sm-4 col-form-label col-form-label-sm">Gérant de l'entreprise:</label>
                    <div className="col-sm-7 col-md">
                      <Text
                        className="form-control form-control-sm"
                        field="owner"
                        placeholder="Gérant de l'entreprise"
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="mail" className="col-sm-4 col-form-label col-form-label-sm">Adresse e-mail:<span className="text-danger"> *</span></label>
                    <div className="col-sm-7 col-md">
                      <Text
                        type="email"
                        className="form-control form-control-sm"
                        field="mail"
                        placeholder="Adresse e-mail"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="phone" className="col-sm-4 col-form-label col-form-label-sm">N° de téléphone:</label>
                    <div className="col-sm-7 col-md">
                      <Text
                        className="form-control form-control-sm"
                        field="phone"
                        placeholder="N° de téléphone"
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="siret" className="col-sm-4 col-form-label col-form-label-sm">N° de siret:</label>
                    <div className="col-sm-7 col-md">
                      <Text
                        className="form-control form-control-sm"
                        field="siret"
                        placeholder="N° de siret"
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="adress" className="col-sm-4 col-form-label col-form-label-sm">Adresse:</label>
                    <div className="col-sm-7 col-md">
                      <Text
                        className="form-control form-control-sm"
                        field="adress"
                        placeholder="Adresse"
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="password" className="col-sm-4 col-form-label col-form-label-sm">Choisissez un mot de passe:<span className="text-danger"> *</span></label>
                    <div className="col-sm-7 col-md">
                      <Text
                        type="password"
                        className="form-control form-control-sm"
                        field="password"
                        placeholder="Choisissez un mot de passe"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group row no-gutters">
                    <label htmlFor="passwordConfirm" className="col-sm-4 col-form-label col-form-label-sm">Confirmez votre mot de passe:<span className="text-danger"> *</span></label>
                    <div className="col-sm-7 col-md">
                      <Text
                        type="password"
                        className="form-control form-control-sm"
                        field="passwordConfirm"
                        placeholder="Confirmez votre mot de passe"
                        required
                      />
                    </div>
                  </div>
                  <p><span className="text-danger"> *</span> Champ obligatoire</p>
                  <button type="submit" className="d-block btn btn-success mt-3 mx-auto">Valider</button>
                </form>
              </React.Fragment>
            )}
          </Form>
        )}

        {/* Une fois le formulaire soumis et l'jout en bdd effectué affiche un message de réussite */}
        {compagnyAdded && (
          <div>
            <p>Félicitaions, votre compte est bien enregistré</p>
            <Link to="/">
              <button
                onClick={() => toggleCompagnyAdded()}
                className="btn"
                type="button"
              >
                Retour à la page de connexion
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

/**
 * Export
 */
export default AddCompagnyForm;
