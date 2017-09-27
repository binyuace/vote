import React from 'react';
import { connect } from 'react-redux';
import { newVoteAsync } from '../../actions/newVoteAsync';

const NewVote = ({ fetch, params }) => {
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
        <button type="submit">NewPoll</button>
      </form>
    );
  };
  const Form = connect(state => state, mapDispatch)(ToConnect);
  return <Form />;
};

export default NewVote;
