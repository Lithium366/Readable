import { connect } from 'react-redux';
import PostDetails from './PostDetails';

import {
  FETCH_POST
} from '../../actions';

import {
  fetchPost
} from '../../util/api';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (postId) => {
      fetchPost(postId)
        .then(post => dispatch({type: FETCH_POST, post}));
    }
  }
};

const mapStateToProps = (state, props) => {
  return {
    posts: state.posts,
    comments: state.comments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);