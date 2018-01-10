import {
  FETCH_COMMENTS,
  RESET_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  COMMENT_VOTE
} from '../actions';

const initialState = [];

function comments(state = initialState, action) {
  const {
    comment,
    comments,
    direction,
    commentId
  } = action;

  switch (action.type) {
    case FETCH_COMMENTS:
      return comments;
    case RESET_COMMENTS:
      return initialState;
    case ADD_COMMENT:
      return {
        ...state,
        comment
      };
    case DELETE_COMMENT:
    case UPDATE_COMMENT:
    case COMMENT_VOTE: {
      const nextState = state.concat();
      const index = nextState.findIndex(v => v.id === commentId);
      nextState[index].voteScore += direction;
      return nextState;
    }
    default:
      return state
  }
}

export default comments;