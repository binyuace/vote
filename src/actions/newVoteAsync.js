import { createAction } from 'redux-actions';

import {
  NEW_VOTE_ASYNC_FAILURE,
  NEW_VOTE_ASYNC_SUCCESS,
  NEW_VOTE_ASYNC_REQUEST,
} from '../constants';

export const newVoteAsyncRequest = createAction(NEW_VOTE_ASYNC_REQUEST);
export const newVoteAsyncSuccess = createAction(NEW_VOTE_ASYNC_SUCCESS);
export const newVoteAsyncFailure = createAction(NEW_VOTE_ASYNC_FAILURE);

export const newVoteAsync = (fetch, pollId, vote) => dispatch => {
  dispatch(newVoteAsyncRequest());
  return fetch(`/api/poll/${pollId}/newvote/${vote}`, { method: 'GET' })
    .then(res => {
      if (!res.ok) throw Error(res.statusText);
      return res.json();
    })
    .then(data => {
      if (!data.title) throw Error('No message received');
      dispatch(newVoteAsyncSuccess(data));
    })
    .catch(() => {
      dispatch(newVoteAsyncFailure());
    });
};
