import { useState } from 'react';

export const VotesComp = ({ article: { votes } }) => {
  const [updateVote, setUpdateVote] = useState(votes);

  function handleClick(num) {
    // e.preventDefault();
    setUpdateVote((curr) => {
      return (curr += num);
    });
  }

  return (
    <div className="votes-comp">
      <p>Votes: {updateVote}</p>
      <button
        onClick={() => {
          handleClick(1);
        }}
      >
        Up Vote
      </button>
      <button
        onClick={() => {
          handleClick(-1);
        }}
      >
        Down Vote
      </button>
    </div>
  );
};
