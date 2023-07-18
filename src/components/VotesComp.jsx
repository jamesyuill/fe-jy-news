import { useState } from 'react';
import { patchVotesByArticleId } from '../utils/api';

export const VotesComp = ({ article: { article_id, votes } }) => {
  const [voteClicks, setVoteClicks] = useState(0);
  const [articleVotes, setArticleVotes] = useState(votes);

  function handleClick(num) {
    setVoteClicks((curr) => {
      return curr + num;
    });

    patchVotesByArticleId(article_id, num).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="votes-comp">
      <p>Votes: {voteClicks + votes}</p>
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
