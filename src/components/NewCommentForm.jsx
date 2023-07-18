export const NewCommentForm = () => {
  return (
    <form className="new-comment-form">
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" />
      <label htmlFor="comment-textarea">Comment: </label>
      <textarea id="comment-textarea" maxLength={150} />
      <button>Submit!</button>
    </form>
  );
};
