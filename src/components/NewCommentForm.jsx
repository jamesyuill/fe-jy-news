import { useContext, useState } from 'react';
import { postNewComment } from '../utils/api';
import { UserContext } from '../contexts/User';

export const NewCommentForm = ({ article_id, setComments }) => {
  const { user, setUser } = useContext(UserContext);

  const [newComment, setNewComment] = useState({
    username: user,
    body: '',
  });
  const [badInput, setBadInput] = useState(false);
  const [isPostError, setIsPostError] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [successfulPost, setSuccessfulPost] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const updateFormField = (field, value) => {
    setNewComment((curr) => ({ ...curr, [field]: value }));
  };

  const handleSubmit = (e) => {
    setButtonClicked(true);
    e.preventDefault();

    if (newComment.username === '' || newComment.body === '') {
      setBadInput(true);
    } else if (newComment.username !== user) {
      setIsUser(false);
    } else {
      setBadInput(false);
      setComments((current) => {
        const timeNow = new Date();
        const newObj = {
          comment_id: current.length + 1,
          body: newComment.body,
          article_id: article_id,
          author: newComment.username,
          votes: 0,
          created_at: timeNow,
        };

        return [newObj, ...current];
      });
      postNewComment(article_id, newComment)
        .then((res) => {
          setIsPostError(false);
          setSuccessfulPost(true);
          setNewComment({ username: '', body: '' });
        })
        .catch((err) => {
          setIsPostError(true);
          setComments((curr) => {
            const newCommentList = [...curr];
            return newCommentList.shift();
          });
        });
    }
  };

  return (
    <form className="new-comment-form" onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        value={newComment.username}
        onChange={(e) => {
          setBadInput(false);
          setSuccessfulPost(false);
          updateFormField('username', e.target.value);
        }}
      />
      <label htmlFor="comment-textarea">Comment: </label>
      <textarea
        id="comment-textarea"
        maxLength={150}
        value={newComment.body}
        onChange={(e) => {
          setBadInput(false);
          setSuccessfulPost(false);
          updateFormField('body', e.target.value);
        }}
      />
      {successfulPost ? <p className="success-class">comment posted!</p> : null}

      {badInput ? (
        <p className="error-class">failed to post: there was an empty field</p>
      ) : null}

      {isPostError ? (
        <p className="error-class">failed to post: apologies try again later</p>
      ) : null}

      {!isUser ? (
        <p className="error-class">failed to post: username incorrect</p>
      ) : null}
      <button
        className="newcomment-submit-btn"
        disabled={buttonClicked ? true : false}
      >
        Submit!
      </button>
    </form>
  );
};
