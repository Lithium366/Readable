import { combineReducers } from 'redux';
import categories from './categories';
import posts from './posts';
import comments from './comments';
import sortState from './sortState';

export default combineReducers({
  categories,
  posts,
  comments,
  sortState
});