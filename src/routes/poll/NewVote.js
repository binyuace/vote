import React from 'react';
import { connect } from 'react-redux';
import { newVoteAsync } from '../../actions/newVoteAsync';

const NewVote = ({ fetch, params,store }) => {
  const mapDispatch = dispatch => ({
    handleSubmit: vote => {
      dispatch(newVoteAsync(fetch, params.poll, vote));
    },
  });
  const ToConnect = ({ handleSubmit }) => {
    let input;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (store.getState().user === null){
            alert('you need to log in first')
            window.location.href = '/login'
            return
          }
          if (!input.value.trim()) return;
          handleSubmit(input.value);
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">New Vote</button>
      </form>
    );
  };
  const Form = connect(state => state, mapDispatch)(ToConnect);
  return <Form />;
};

export default NewVote;
