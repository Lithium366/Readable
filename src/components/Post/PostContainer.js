import { connect } from 'react-redux';
import Post from './Post';
import {
  deleteItem,
  vote
} from '../../util/api';

import {
  DELETE_POST,
  POST_VOTE,
} from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      deleteItem(id, 'posts')
        .then(post => dispatch({type: DELETE_POST, post}))
    },
    vote: (postId, direction) => {
      // Update local state first for an immediate feedback
      dispatch({type: POST_VOTE, postId, direction});
      vote(postId, 'posts', direction);
    }
  }
};

const mapStateToProps = (state, props) => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);