// GLOBAL
import React from 'react';
import PropTypes from 'prop-types';

// LOCAL
import './single.sass';

// CODE
const Single = ({ article }) => {
  
  
    return (
      <div>
        {article}
      </div>
    )
  
}
Single.propTypes = {
  article: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
export default Single;
