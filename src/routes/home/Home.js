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
import { connect } from 'react-redux';
import s from './Home.css';
import Polls from '../../components/polls';
import NewPoll from './NewPoll';

const mapStateToProps = state => ({ polls: state.polls });
const ShowPolls = connect(mapStateToProps)(Polls);
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
    // console.log(polls)
    polls = polls.map(arr =>
      <h1 key={arr._id}>
        <a href={`/poll/${arr._id}`}>
          {arr.title}
        </a>
      </h1>,
    );
    // console.log(polls)
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Bin Vote</h1>
          show store state with context:
          {JSON.stringify(this.context.store.getState())}
          <NewPoll fetch={this.context.fetch} />
          <ShowPolls />
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
