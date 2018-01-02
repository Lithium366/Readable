import {
  FETCH_CATEGORIES
} from '../actions';

const initialState = [
  { name: 'react', path: 'react' },
  { name: 'redux', path: 'redux' },
  { name: 'udacity', path: 'udacity' },
];

function posts(state = initialState, action) {
  const { categories } = action;

  switch (action.type) {
    case FETCH_CATEGORIES:
      return categories;
    default:
      return state;
  }
}

export default posts;