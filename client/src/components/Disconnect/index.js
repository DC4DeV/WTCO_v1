/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

/**
 * Local import
 */
// Composants

// Styles et assets
import './disconnect.sass';

/**
 * Code
 */
class Disconnect extends React.Component {
  static propTypes = {
    disconnect: PropTypes.func.isRequired,
  }

  handleClick = () => {
    const { disconnect } = this.props;

    disconnect();
    this.props.history.push('/');
  }

  render() {
    return (
      <div id="disconnect">
        <button
          type="button"
          onClick={() => this.handleClick()}
        >
          Se déconnecter
        </button>
      </div>
    );
  }
}

/**
 * Export
 */
export default Disconnect;
