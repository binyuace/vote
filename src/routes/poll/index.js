import React from 'react';
import Layout from '../../components/Layout';

async function action({ fetch, params }) {
  const response = await fetch(`/api/poll/${params.poll}`, {
    method: 'GET',
  });
  const result = await response.json();
  return {
    chunks: ['home'],
    title: result.title,
    component: (
      <Layout>
        <h1>
          poll:{result.title}
        </h1>
      </Layout>
    ),
  };
}

export default action;
