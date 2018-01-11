import {
  FETCH_CATEGORIES
} from '../actions';
const all = { name: 'all', path: '' };

function posts(state = [ all ], action) {
  const { categories } = action;

  switch (action.type) {
    case FETCH_CATEGORIES:
      return [
        all,
        ...categories
      ];
    default:
      return state;
  }
}

export default posts;