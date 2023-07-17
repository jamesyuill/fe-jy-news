export const VotesComp = ({ article: { votes } }) => {
  return (
    <div className="votes-comp">
      <p>Votes: {votes}</p>
    </div>
  );
};
