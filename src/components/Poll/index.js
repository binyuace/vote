import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Poll = poll => {
  console.log('poll', poll);
  return (
    <div>
      {JSON.stringify(poll)}
    </div>
  );
};

export default Poll;
