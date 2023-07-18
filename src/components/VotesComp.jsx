import { useState } from 'react';
import { patchVotesByArticleId } from '../utils/api';

export const VotesComp = ({ article: { article_id, votes } }) => {
  const [voteClicks, setVoteClicks] = useState(0);
  const [upVoteClicked, setUpVoteClicked] = useState(false);
  const [downVoteClicked, setDownVoteClicked] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleClick(num) {
    setVoteClicks((curr) => {
      return curr + num;
    });

    patchVotesByArticleId(article_id, num)
      .then((res) => {
        setIsError(false);
      })
      .catch((err) => {
        setVoteClicks((curr) => {
          return curr - num;
        });
        setIsError(true);
      });
  }

  return (
    <div className="votes-comp">
      <p>Votes: {voteClicks + votes}</p>
      <button
        disabled={upVoteClicked ? true : false}
        onClick={() => {
          handleClick(1);
          setUpVoteClicked(true);
        }}
      >
        Up Vote
      </button>
      <button
        disabled={downVoteClicked ? true : false}
        onClick={() => {
          handleClick(-1);
          setDownVoteClicked(true);
        }}
      >
        Down Vote
      </button>
      {isError ? <p>Something went wrong, please try and vote again</p> : null}
    </div>
  );
};
