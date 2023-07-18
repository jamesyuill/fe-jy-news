export const VotesComp = ({ article: { votes } }) => {
  return (
    <div className="votes-comp">
      <p>Article Votes: {votes}</p>
    </div>
  );
};
