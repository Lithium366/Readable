import {
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  VOTE_UP,
  VOTE_DOWN
} from '../actions';

const initialState = [
  {
    author: "thingtwo",
    body: "Hi there! I am a COMMENT.",
    deleted: false,
    id: "894tuq4ut84ut8v4t8wun89g",
    parentDeleted: false,
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1468166872634,
    voteScore: 6
  },
  {
    author: "thingone",
    body: "Comments. Are. Cool.",
    deleted: false,
    id: "8tu4bsun805n8un48ve89",
    parentDeleted: false,
    parentId: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1469479767190,
    voteScore: -5
  }
];

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