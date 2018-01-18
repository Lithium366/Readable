import {
  deleteItem,
  vote
} from '../../util/api';

import {
  DELETE_POST,
  POST_VOTE,
} from '../../actions';

const PostMapDispatchToProps = (dispatch) => {
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

export default PostMapDispatchToProps;