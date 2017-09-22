import { INITIAL_POLL } from '../constants';

export default function poll(state = {}, action) {
  switch (action.type) {
    case INITIAL_POLL:
      return action.poll;
    default:
      return state;
  }
}
