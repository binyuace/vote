import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import poll from './poll';

export default combineReducers({
  user,
  runtime,
  poll,
});
