import React from 'react';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';

class FormBlog extends React.Component {
  static propTypes = {
    titleValue: PropTypes.string.isRequired,
    contentValue: PropTypes.string.isRequired,
    addArticle: PropTypes.func.isRequired,
    showViewAddArticle: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
  };

  handleInputChange = (evt) => {
    const { name, value } = evt.target;
    const { onInputChange } = this.props;
    onInputChange(name, value);
  }

  goAddArticleBlog = () => {
    const { showViewAddArticle } = this.props;
    showViewAddArticle();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.goAddArticleBlog();
    const { addArticle, titleValue, contentValue } = this.props;
    const event = new Date();
    const options = {
      year: 'numeric', month: 'long', day: 'numeric',
    };
    const newArticle = {
      id: uuidv4(),
      title: titleValue,
      author: 'nouvel auteur',
      date: `, le ${event.toLocaleDateString('fr-FR', options)} à ${event.getHours()} h ${event.getMinutes()}`,
      content: contentValue,
      nbComments: 0,
    };

    addArticle(newArticle);
  }

  render() {
    const {
      titleValue,
      contentValue,
    } = this.props;
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control ml-3"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="titre de l'article"
          onChange={this.handleInputChange}
          name="title"
          value={titleValue}
        />
        <textarea
          className="form-control inputArticle ml-3"
          rows="3"
          type="text"
          id="todo-input"
          placeholder="écrivez votre article ici"
          onChange={this.handleInputChange}
          name="content"
          value={contentValue}
        />
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-secondary btn-sm mt-2 ml-3">Publier l'article</button>
          <button type="button" className="btn btn-danger btn-sm mt-2" onClick={this.goAddArticleBlog}>Annuler</button>
        </div>
      </form>
    );
  }
}

export default FormBlog;
