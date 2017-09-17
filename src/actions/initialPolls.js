import { INITIAL_POLLS } from '../constants';

export default function initialPolls(polls) {
  return {
    type: INITIAL_POLLS,
    polls,
  };
}
