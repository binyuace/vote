import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import votes from './initialVotes'
export default combineReducers({
  user,
  runtime,
  votes,
});
