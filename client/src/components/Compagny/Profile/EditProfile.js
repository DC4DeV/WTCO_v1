/**
 * Import
 */
import React from 'react';
/**
 * Local import
 */
// Composants

// Styles et assets
import './profile.sass';

/**
 * Code
 */
const EditProfile = () => (
  <div id="profile-edit">
    <h2>Profile de votre entreprise</h2>
    <form>
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-4 col-form-label col-form-label-sm">Nom:</label>
        <div className="col-sm-8">
          <input type="text" className="form-control form-control-sm" id="name" placeholder="Nom" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="owner" className="col-sm-4 col-form-label col-form-label-sm">Gérant:</label>
        <div className="col-sm-8">
          <input type="text" className="form-control form-control-sm" id="owner" placeholder="Nom du gérant" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="siret" className="col-sm-4 col-form-label col-form-label-sm">N° de siret:</label>
        <div className="col-sm-8">
          <input type="text" className="form-control form-control-sm" id="siret" placeholder="N° de siret" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="adress" className="col-sm-4 col-form-label col-form-label-sm">Adresse:</label>
        <div className="col-sm-8">
          <input type="text" className="form-control form-control-sm" id="adress" placeholder="Adresse" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="phone" className="col-sm-4 col-form-label col-form-label-sm">Téléphone:</label>
        <div className="col-sm-8">
          <input type="text" className="form-control form-control-sm" id="phone" placeholder="N° de téléphone" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="mail" className="col-sm-4 col-form-label col-form-label-sm">Mail:</label>
        <div className="col-sm-8">
          <input type="mail" className="form-control form-control-sm" id="mail" placeholder="Adresse mail" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="login" className="col-sm-4 col-form-label col-form-label-sm">Identifiant:</label>
        <div className="col-sm-8">
          <input type="mail" className="form-control form-control-sm" id="login" value="identifiant@mail" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="password" className="col-sm-4 col-form-label col-form-label-sm">Nouveau password:</label>
        <div className="col-sm-8">
          <input type="password" className="form-control form-control-sm" id="password" />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="confirmpassword" className="col-sm-4 col-form-label col-form-label-sm">Confirmation password:</label>
        <div className="col-sm-8">
          <input type="password" className="form-control form-control-sm" id="confirmpassword" />
        </div>
      </div>
      <div className="text-center">
        <button className="valid-button" type="button">Valider</button>
      </div>
    </form>

  </div>
);

/**
 * Export
 */
export default EditProfile;
