import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import PropTypes from 'prop-types';
// eslint-disable
const ReduxState = ({ thestate }) =>
  // console.log(props)
  <div>
    <p>
      redux state:{JSON.stringify(thestate)}
    </p>
  </div>;

export default ReduxState;
