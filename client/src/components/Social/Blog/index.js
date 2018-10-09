// GLOBAL
import React from 'react';
import PropTypes from 'prop-types';

// LOCAL
import './blog.sass';
import FormBlog from 'src/containers/Social/FormBlog';
import Navbar from '../Navbar';
import ArticlesBlog from './ArticlesBlog';

// CODE
class Blog extends React.Component {
  //  PROPTYPES
  static propTypes = {
    actions: PropTypes.shape({
      loadArticles: PropTypes.func.isRequired,
    }).isRequired,
    titleValue: PropTypes.string.isRequired,
    articles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    viewAddArticle: PropTypes.bool.isRequired,
    addArticle: PropTypes.func.isRequired,
    showViewAddArticle: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { loadArticles } = this.props.actions;
    loadArticles();
  }
  
  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    const { onInputChange } = this.props;
    onInputChange(name, value);
  }

  goAddArticleBlog = () => {
    const { showViewAddArticle } = this.props;
    showViewAddArticle();
  }

  addArticleBlog = (evt) => {
    evt.preventDefault();
    const { addArticle } = this.props;
    addArticle();
  }

  render() {
    const {
      articles,
      viewAddArticle,
    } = this.props;
    return (
      <React.Fragment>
        <Navbar />
        <div className="div-princ" id="blog">
          <h2 className="text-success">Le blog</h2>
          {/* Affichage des articles */}
          {viewAddArticle === false && (
            articles.map(article => (
              <ArticlesBlog
                key={article.id}
                {...article}
              />
            ))
          )}
          {/* Si les articles sont visibles, on montre le bouton pour créer un nouvel article */}
          {viewAddArticle === false && (
            <div className="row justify-content-center">
              <button
                type="button"
                className="btn btn-secondary mb-3"
                onClick={this.goAddArticleBlog}
              >Vous pouvez ajouter un nouvel article
              </button>
            </div>
          )}
          {/* Affichage du formulaire pour écrire un nouvel article */}
          {viewAddArticle && (<FormBlog />)}
        </div>
      </React.Fragment>
    );
  }
}

// EXPORT
export default Blog;
