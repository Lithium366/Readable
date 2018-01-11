import { connect } from 'react-redux';
import Posts from './Posts';
import { fetchAllPosts, fetchCategoryPosts } from '../../util/api';

import {
  SORT_POSTS,
  FETCH_ALL_POSTS,
  FETCH_CATEGORY_POSTS,
  RESET_POSTS
} from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: (sortState) => {
      fetchAllPosts()
        .then(posts => dispatch({type: FETCH_ALL_POSTS, posts}))
        .then(() => dispatch({type: SORT_POSTS, ...sortState}))
    },
    fetchCategoryPosts: (category, sortState) => {
      // Don't show stale content
      dispatch({type: RESET_POSTS});
      fetchCategoryPosts(category)
        .then(posts => dispatch({type: FETCH_CATEGORY_POSTS, posts}))
        .then(() => dispatch({type: SORT_POSTS, ...sortState}))
    },
    sortPosts: (direction, property) =>  {
      dispatch({
        type: SORT_POSTS,
        direction,
        property
      })
    }
  }
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    sortState: state.sortState
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);