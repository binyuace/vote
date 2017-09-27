import React from 'react';

const Votes = ({ votes, handleClick }) => {
  const mapVotesToReact = votes.map((vote, idx) =>
    <div key={idx}>
      <button onClick={() => handleClick(idx)}>
        {vote.name}
      </button>
      <h2>
        {vote.number}
      </h2>
    </div>,
  );
  return (
    <div>
      {mapVotesToReact}
    </div>
  );
};

export default Votes;
