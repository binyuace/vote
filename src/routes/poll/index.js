import React from 'react';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const resp = await fetch('/graphql', {
    body: JSON.stringify({
      query: '{news{title,link,content}}',
    }),
  });
  const { data } = await resp.json();
  if (!data || !data.news) throw new Error('Failed to load the news feed.');
  return {
    chunks: ['home'],
    title: 'Vote',
    component: (
      <Layout>
        <h1>
          pool:{params.poll}
        </h1>
      </Layout>
    ),
  };
}

export default action;
