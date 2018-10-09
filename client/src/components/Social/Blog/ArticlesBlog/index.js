// GLOBAL
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

// LOCAL
import { getURL } from 'src/utils/url';
import './articlesBlog.sass';

const textTruncate = (str, length = 150, ending = '... ') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  }
  return str;
};
// CODE
const ArticlesBlog = ({
  id,
  title,
  author,
  date,
  content,
  // nbComments,
}) => (
  <div className="card border border-bottom-4 p-2">
    <NavLink
      exact
      to={getURL('/social/blog', id)}
    >
      <div className="card-body articleBlog">
        <h5 className="card-title titleArticleBlog"> {title} </h5>
        <a href="#" className="card-link">{author} </a>
        <span className="text-black-50">{date}</span>
        <p className="card-text">{textTruncate(content, 170)}
          {content.length > 100
          && (
            <NavLink
              exact
              to={getURL('/social/blog', id)}
              className="card-link text-warning"
            >
            lire la suite
            </NavLink>
          )
          }
        </p>
      </div>
    </NavLink>
  </div>
);

//  PROPTYPES
ArticlesBlog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  // nbComments: PropTypes.number.isRequired,
};

// EXPORT
export default withRouter(ArticlesBlog);
