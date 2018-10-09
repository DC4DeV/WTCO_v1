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
const Profile = () => (
  <div id="profile">
    <h2>Profile de votre entreprise</h2>

    <p>Nom : </p>
    <p>Gérant : </p>
    <p>Siret : </p>
    <p>Adresse : </p>
    <p>Téléphone : </p>
    <p>Mail de contact : </p>
    <p>Identifiant : </p>

    <button className="edit-button" type="button">Modifier</button>
  </div>
);

/**
 * Export
 */
export default Profile;
