import {
  SORT_POSTS,
} from '../actions';

function sortState(state = {}, action) {
  const {
    direction,
    property
    } = action;

  switch (action.type) {
    case SORT_POSTS:
      return {
        property,
        direction
      };
    default:
      return state
  }
}

export default sortState;