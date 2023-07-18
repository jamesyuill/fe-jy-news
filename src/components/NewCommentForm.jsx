import { useState } from 'react';

export const NewCommentForm = () => {
  const [newComment, setNewComment] = useState({
    username: '',
    body: '',
  });

  const updateFormField = (field, value) => {
    setNewComment((curr) => ({ ...curr, [field]: value }));
  };

  return (
    <form className="new-comment-form">
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={newComment.username}
        onChange={(e) => updateFormField('username', e.target.value)}
      />
      <label htmlFor="comment-textarea">Comment: </label>
      <textarea
        id="comment-textarea"
        maxLength={150}
        value={newComment.body}
        onChange={(e) => updateFormField('body', e.target.value)}
      />
      <button>Submit!</button>
    </form>
  );
};
