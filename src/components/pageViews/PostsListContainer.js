import { connect } from 'react-redux';
import PostsList from './PostsList';

import {
  FETCH_CATEGORIES
} from '../../actions';

import {
  fetchCategories
} from '../../util/api';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => {
      fetchCategories()
        .then(({ categories }) => dispatch({type: FETCH_CATEGORIES, categories}));
    }
  }
};

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);