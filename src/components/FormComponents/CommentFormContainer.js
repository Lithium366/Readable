import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import CommentForm from './CommentForm';

import {
  addComment,
  updateComment
} from '../../util/api';

import {
  ADD_COMMENT,
  UPDATE_COMMENT
} from '../../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (formData) => {
      const commentData = {
        timestamp: (new Date()).getTime(),
        id: uuidv4(),
        ...formData
      };

      return addComment(commentData)
        .then(comment => dispatch({type: ADD_COMMENT, comment}))
    },
    updateComment: (formData) => {
      return updateComment(formData)
        .then(comment => dispatch({type: UPDATE_COMMENT, comment}))
    },
  }
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(CommentForm);