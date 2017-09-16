/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { connect } from 'react-redux';
import Layout from '../../components/Layout';
import ReduxState from '../../components/ReduxState';
import about from './about.md';

const mapStateToProps = state => ({
  thestate: state,
});
const ShowRedux = connect(mapStateToProps)(ReduxState);
function action() {
  return {
    chunks: ['about'],
    title: about.title,
    component: (
      <Layout>
        <ShowRedux />
      </Layout>
    ),
  };
}

export default action;
