import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types'

const Votes = ({votes}) => {
	console.log(votes)
	const child = votes.map(item =>
    <h1 key={item.link}>
      <a href={item.link}>
        {item.title}
      </a>
    </h1>)
  return <div>{child}</div>
}
Votes.PropTypes ={
	votes: PropTypes.object.required
}
export default Votes
