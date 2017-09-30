import React from 'react';
import Layout from '../../components/Layout';

async function action({ fetch, store }) {
  const resp = await fetch('/api/polls', {
    method: 'GET',
  });
  const data = await resp.json();
  const state = store.getState();
  if (!data) throw new Error('Failed to load the polls feed.');
  const myPolls = data
    .filter(arr => arr.creatorId === (state.user ? state.user.id : null))
    .reverse()
    .map(arr =>
      <h1 key={arr._id}>
        <a href={`/poll/${arr._id}`}>
          {arr.title}
        </a>
      </h1>,
    );
  return {
    chunks: ['about'],
    title: 'My Polls',
    component: (
      <Layout>
        {myPolls}
      </Layout>
    ),
  };
}

export default action;
