/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import s from './Navigation.css';
import Link from '../Link';


class Navigation extends React.Component {
  render() {
    const fetch = this.context.fetch.bind(this)
    return (
      <div className={s.root} role="navigation">
        <Link className={s.link} to="/about">
          About
        </Link>
        <Link className={s.link} to="/contact">
          Contact
        </Link>
        <span className={s.spacer}> | </span>
        {this.context.store.getState().user !== null?
        <a className={cx(s.link, s.highlight)} href="/logout">
          Log Out
        </a>:
        <Link className={s.link} to="/login">
          Log in
        </Link>}
      </div>
    );
  }
}
Navigation.contextTypes = {
  store: PropTypes.Object,
  fetch: PropTypes.function,
};

export default withStyles(s)(Navigation);
