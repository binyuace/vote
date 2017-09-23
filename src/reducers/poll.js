import { INITIAL_POLL, VOTE_ASYNC_FAILURE, VOTE_ASYNC_SUCCESS,VOTE_ASYNC_REQUEST} from '../constants'

export default function poll(state = {}, action) {
  switch (action.type) {
    case INITIAL_POLL:
      return { ...action.poll, messageAsync:'vote what you like'}
  	case VOTE_ASYNC_REQUEST:
      return {...state, 'messageAsync': 'Loading...'}
    case VOTE_ASYNC_SUCCESS:
      return {...state, 'votes':action.payload.votes,messageAsync:'you have voted'}
    case VOTE_ASYNC_FAILURE:
      return {...state, 'messageAsync': 'No message received, please check your connection'}
    default:
      return state;
  }
}
