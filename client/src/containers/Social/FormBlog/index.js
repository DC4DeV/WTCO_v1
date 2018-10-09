/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import FormBlog from 'src/components/Social/Blog/FormBlog';
import { addArticle, showViewAddArticle, onInputChange } from 'src/store/reducers/reducerSocial';
// Action Creators
// import { doSomething } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  titleValue: state.reducerSocial.title,
  contentValue: state.reducerSocial.content,
});
/* === Actions === */
const mapDispatchToProps = dispatch => ({
  showViewAddArticle: () => {
    dispatch(showViewAddArticle());
  },
  addArticle: (newArticle) => {
    dispatch(addArticle(newArticle));
  },
  onInputChange: (title, content) => {
    dispatch(onInputChange(title, content));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const FormBlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormBlog);

/**
 * Export
 */

export default FormBlogContainer;
