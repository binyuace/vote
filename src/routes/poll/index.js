import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import initialPoll from '../../actions/initialPoll';
import Poll from '../../components/Poll';

async function action({ fetch, params, store }) {
  const response = await fetch(`/api/poll/${params.poll}`, {
    method: 'GET',
  });
  const result = await response.json();
  store.dispatch(initialPoll(result));
  const ShowPoll = connect(state => state.poll)(Poll);
  return {
    chunks: ['home'],
    title: result.title,
    component: (
      <Layout>
        <h1>
          poll:{result.title}
          <br />
          votes:{result.votes.length
            ? result.votes.length[0].name
            : 'no votes curretly'}
        </h1>
        <ShowPoll />
      </Layout>
    ),
  };
}

export default action;
