//  import
import React from 'react';

// local
import '../chat.sass';
import './form.sass';

// code
const Form = () => (
  <form id="form">
    <input
      id="form-input"
      placeholder="Votre message"
      type="text"
      autoComplete="off"
    />
  </form>
);

export default Form;
