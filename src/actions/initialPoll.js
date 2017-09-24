import { INITIAL_POLL } from '../constants';

export default function initialPoll(poll) {
  return {
    type: INITIAL_POLL,
    poll,
  };
}
