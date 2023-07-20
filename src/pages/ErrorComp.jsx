export const ErrorComp = ({ message }) => {
  return (
    <div className="error-comp">
      <h2>Error</h2>
      <h3>Not Found</h3>
      {message ? <p>{message.err.message}</p> : null}
    </div>
  );
};
