import {INITIAL_VOTES} from '../constants'
export default function votes(state = {},action){
	console.log('reducer/votes')
	console.log('action:',action)
	console.log('state:',state)
 	switch (action.type) {
		case INITIAL_VOTES: 
			console.log('got action')
 			return {
 				...state,
 				votes:action.votes,
 			}
		default:
      return state
 	}
}