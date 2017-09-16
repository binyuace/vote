import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import polls from './initialPolls';

export default combineReducers({
  user,
  runtime,
  polls,
});
