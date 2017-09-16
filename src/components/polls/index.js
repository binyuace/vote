import React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Polls = ({polls}) => {
  console.log('polls:',polls)
  const child = polls.map(item =>
    <h1 key={item.link}>
      <a href={item.link}>
        {item.title}
      </a>
    </h1>,
  );
  return (
    <div>
      {child}
    </div>
  );
};

export default Polls;
