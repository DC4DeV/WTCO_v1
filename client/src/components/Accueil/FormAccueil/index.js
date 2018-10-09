import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Text, Form } from 'react-form';

class FormAccueil extends React.Component {
  static propTypes = {
    checkUser: propTypes.func.isRequired,
  }

  handleSubmit = (submittedValues) => {
    const { checkUser } = this.props;
    checkUser(submittedValues);
  }

  render() {
    return (
      <div className="card-body col-md-8 mx-auto">
        <div className="d-flex justify-content-between mb-2">
          {/* <NavLink exact to="/compagny/home">
            <div className="form-check text-dark">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label htmlFor="exampleRadios1" className="form-check-label">
                Entreprise
              </label>
            </div>
          </NavLink>
          <NavLink exact to="/social/blog">
            <div className="form-check text-dark">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Chauffeur
              </label>
            </div>
          </NavLink> */}
          <NavLink exact to="/social/blog">
            <div className="form-check text-dark">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label className="form-check-label" htmlFor="exampleRadios3">
                Visiteur
              </label>
            </div>
          </NavLink>
        </div>
        <Form onSubmit={submittedValues => this.handleSubmit(submittedValues)}>
          {formApi => (
            <form onSubmit={formApi.submitForm}>
              <div className="form-group row">
                {/* <label for="inputEmail3" className="col-12 col-form-label text-light">Email</label>  */}
                <div className="col-12">
                  <Text type="email" className="form-control" field="mail" placeholder="Email" />
                </div>
              </div>
              <div className="form-group row">
                {/* <label for="inputPassword3" className="col-12 col-form-label text-light">Mot de passe</label>  */}
                <div className="col-12">
                  <Text type="password" className="form-control" field="password" placeholder="Mot de passe" />
                  <div className="form-check text-light m-2">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Rester connecté</label>
                  </div>
                  <div className="mt-4 d-flex justify-content-between">
                    {/* <button type="submit" className="btn btn-success">Se connecter</button> */}
                    <button type="submit" className="btn btn-success"> Se connecter</button>
                    <a href="/" className="text-warning d-sm-block d-none">J'ai oublié mon mot de passe</a>
                    <NavLink to="/register" className="btn btn-primary">S'enregistrer</NavLink>
                  </div>
                  <a href="/" className=" text-center mt-3 text-warning d-sm-none d-block">J'ai oublié mon mot de passe</a>
                </div>
              </div>
            </form>
          )}
        </Form>
      </div>
    );
  }
}
export default FormAccueil;
