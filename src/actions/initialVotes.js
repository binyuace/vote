import { INITIAL_VOTES } from '../constants';

export function initialVotes(...votes) {
	console.log('initializing votes')
  return {
    type: INITIAL_VOTES,
    votes: votes
  }
}