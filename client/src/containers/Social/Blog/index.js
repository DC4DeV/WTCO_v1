/**
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/**
 * Local import
 */
import Blog from 'src/components/Social/Blog';
import { addArticle, loadArticles, showViewAddArticle, onInputChange } from 'src/store/reducers/reducerSocial';
// Action Creators
// import { doSomething } from 'src/store/reducer';

/* === State (données) === */
const mapStateToProps = state => ({
  titleValue: state.reducerSocial.title,
  contentValue: state.reducerSocial.content,
  articles: state.reducerSocial.articles,
  viewAddArticle: state.reducerSocial.viewAddArticle,
  status: state.reducerSocial.articlesStatus,
});

/* === Actions === */

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ loadArticles }, dispatch),
  showViewAddArticle: () => {
    dispatch(showViewAddArticle());
  },
  addArticle: () => {
    dispatch(addArticle());
  },
  onInputChange: (title, content) => {
    dispatch(onInputChange(title, content));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const BlogContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blog);

/**
 * Export
 */

export default BlogContainer;
