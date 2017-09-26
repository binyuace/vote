import { createAction } from 'redux-actions';

import {
  VOTE_ASYNC_FAILURE,
  VOTE_ASYNC_SUCCESS,
  VOTE_ASYNC_REQUEST,
} from '../constants';

export const voteAsyncRequest = createAction(VOTE_ASYNC_REQUEST);
export const voteAsyncSuccess = createAction(VOTE_ASYNC_SUCCESS);
export const voteAsyncFailure = createAction(VOTE_ASYNC_FAILURE);

const voteAsync = (fetch, pollId, idx) => dispatch => {
  dispatch(voteAsyncRequest());
  return fetch(`/api/poll/${pollId}/vote/${idx}`, { method: 'GET' })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(data => {
      if (!data.title) throw Error('No message received');
      dispatch(voteAsyncSuccess(data));
    })
    .catch(() => {
      dispatch(voteAsyncFailure());
    });
};
export default voteAsync;
