import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  VOTE_UP,
  VOTE_DOWN
} from '../actions';

const initialState = {};

function posts(state = initialState, action) {
  const { post } = action;

  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        post
      };
    case UPDATE_POST:
    case DELETE_POST:
    case VOTE_UP:
    case VOTE_DOWN:
    default:
      return state
  }
}

export default posts;