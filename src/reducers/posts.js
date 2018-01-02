import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  VOTE_UP,
  VOTE_DOWN
} from '../actions';

const initialState = [
  {
    author: "thingone",
    body: "Just kidding. It takes more than 10 minutes to learn technology.",
    category: "redux",
    commentCount: 0,
    deleted: false,
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    title: "Learn Redux in 10 minutes!",
    voteScore: -5
  },
  {
    author: "thingtwo",
    body: "Everyone says so after all.",
    category: "react",
    commentCount: 2,
    deleted: false,
    id: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1467166872634,
    title: "Udacity is the best place to learn React",
    voteScore: 6
  }
];

function posts(state = initialState, action) {
  const {
    post
  } = action;

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