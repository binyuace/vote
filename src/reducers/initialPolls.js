import { INITIAL_POLLS } from '../constants';

export default function polls(state = [], action) {
  switch (action.type) {
    case INITIAL_POLLS:
      return action.polls;
    // case ADD_POLL:
    // 	return {
    // 	}
    default:
      return state;
  }
}
