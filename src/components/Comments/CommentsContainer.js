import { connect } from 'react-redux';
import Comments from './Comments';
import {
  fetchComments,
  deleteItem,
  vote
} from '../../util/api';

import {
  FETCH_COMMENTS,
  RESET_COMMENTS,
  COMMENT_VOTE,
  DELETE_COMMENT
} from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (postId) => {
      // Don't show stale content
      dispatch({type: RESET_COMMENTS});
      fetchComments(postId)
        .then(comments => dispatch({type: FETCH_COMMENTS, comments}));
    },
    deleteComment: (id) => {
      deleteItem(id, 'comments')
        .then(comment => dispatch({type: DELETE_COMMENT, comment}))
    },
    vote: (commentId, direction) => {
      dispatch({type: COMMENT_VOTE, commentId, direction});
      vote(commentId, 'comments', direction);
    }
  }
};

const mapStateToProps = (state, props) => {
  return {
    comments: state.comments,
    categories: state.categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);