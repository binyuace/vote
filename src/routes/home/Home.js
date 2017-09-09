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
import Votes from '../../components/votes'
import { connect } from 'react-redux'


const mapStateToProps = state => {
  console.log(state)
  return state.votes
}
const ShowVotes = connect(mapStateToProps)(Votes) 
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
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Bin Vote</h1>
          show store state with context:
          {JSON.stringify(this.context.store.getState())}
          <ShowVotes />
        </div>
      </div>
    );
  }
}
Home.contextTypes = {
  store: PropTypes.Object
};
export default withStyles(s)(Home);
