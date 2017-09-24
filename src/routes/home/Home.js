/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import NewPoll from './NewPoll';

class Home extends React.Component {
  // static propTypes = {
  //   votes: PropTypes.arrayOf(
  //     PropTypes.shape({
  //       title: PropTypes.string.isRequired,
  //       link: PropTypes.string.isRequired,
  //     }),
  //   ).isRequired,
  // };
  render() {
    let polls = this.props.polls.reverse();
    polls = polls.map(arr =>
      <h1 key={arr._id}>
        <a href={`/poll/${arr._id}`}>
          {arr.title}
        </a>
      </h1>,
    );
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Bin Vote</h1>
          show store state with context:
          {JSON.stringify(this.context.store.getState())}
          <NewPoll fetch={this.context.fetch} />
          <div>{polls}</div>
        </div>
      </div>
    );
  }
}
Home.contextTypes = {
  store: PropTypes.object,
  fetch: PropTypes.func,
};
export default withStyles(s)(Home);
