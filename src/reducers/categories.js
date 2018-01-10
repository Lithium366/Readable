import {
  FETCH_CATEGORIES
} from '../actions';
const all = { name: 'all', path: '' };

const initialState = [ all ];

function posts(state = initialState, action) {
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