import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import PostForm from './PostForm';
import {
  addPost,
  updatePost,
  fetchCategories
} from '../../util/api';

import {
  ADD_POST,
  UPDATE_POST,
  FETCH_CATEGORIES,
  SORT_POSTS
} from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (formData, sortState) => {
      const postData = {
        timestamp: (new Date()).getTime(),
        id: uuidv4(),
        ...formData
      };

      return addPost(postData)
        .then(post => dispatch({type: ADD_POST, post}))
        .then(() => dispatch({type: SORT_POSTS, ...sortState}));
    },
    updatePost: (formData) => {
      return updatePost(formData)
        .then(post => dispatch({type: UPDATE_POST, post}))
    },
    fetchCategories: () => {
      fetchCategories()
        .then(({ categories }) => dispatch({type: FETCH_CATEGORIES, categories}));
    }
  }
};

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories,
    sortState: state.sortState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);