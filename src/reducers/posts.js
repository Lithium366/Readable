import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  SORT_POSTS,
  FETCH_ALL_POSTS,
  FETCH_CATEGORY_POSTS,
  FETCH_POST,
  POST_VOTE
} from '../actions';

function posts(state = [], action) {
  const {
    post,
    posts,
    postId,
    direction,
    property
  } = action;

  switch (action.type) {
    case FETCH_ALL_POSTS:
    case FETCH_CATEGORY_POSTS:
      return posts;
    case FETCH_POST:
      return [ post ];
    case POST_VOTE: {
      const nextState = state.concat();
      const index = nextState.findIndex(v => v.id === postId);
      nextState[index].voteScore += direction;
      return nextState;
    }
    case ADD_POST:
      return [
        ...state,
        post
      ];
    case SORT_POSTS:
      return state
        .concat()
        .sort((a, b) => direction === -1 ? b[property] - a[property] : a[property] - b[property]);
    case DELETE_POST:
    case UPDATE_POST: {
      const nextState = state.concat();
      const index = nextState.findIndex(v => v.id === post.id);
      nextState[index] = post;
      return nextState;
    }
    default:
      return state
  }
}

export default posts;