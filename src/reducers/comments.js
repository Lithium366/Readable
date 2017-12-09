import {
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  VOTE_UP,
  VOTE_DOWN
} from '../actions';

const initialState = {};

function comments(state = initialState, action) {
  const { comment } = action;

  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comment
      };
    case DELETE_COMMENT:
    case UPDATE_COMMENT:
    case VOTE_UP:
    case VOTE_DOWN:
    default:
      return state
  }
}

export default comments;