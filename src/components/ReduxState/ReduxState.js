import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types'

const ReduxState = ({thestate}) => {
		// console.log(props)
		return (
			<div>
				<p>redux state:{JSON.stringify(thestate)}</p>
			</div>
		)}
ReduxState.PropTypes = {
	thestate:PropTypes.object.isRequired,
}
export default ReduxState