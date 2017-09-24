/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const resp = await fetch('/api/polls', {
    method: 'GET',
  });
  const data = await resp.json();
  if (!data) throw new Error('Failed to load the polls feed.');
  return {
    chunks: ['home'],
    title: 'Vote',
    component: (
      <Layout>
        <Home polls={data} />
      </Layout>
    ),
  };
}

export default action;
