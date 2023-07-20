import { useContext, useEffect, useState } from 'react';
import formatDateTime from '../utils/formatDateTime';
import { UserContext } from '../contexts/User';
import { deleteCommentById } from '../utils/api';

export const CommentCard = ({
  comment: { author, body, created_at, votes, comment_id },
  setComments,
}) => {
  const { user, setUser } = useContext(UserContext);
  const [isError, setIsError] = useState(false);

  const dateAndTime = formatDateTime(created_at);

  function handleClick(e) {
    e.preventDefault();
    setComments((curr) => {
      return curr.filter((comment) => comment.comment_id !== comment_id);
    });
    deleteCommentById(comment_id).catch((err) => {
      setIsError(true);
    });
  }

  // useEffect(() => {
  //   deleteCommentById(comment_id)
  //     .then(() => {
  //       console.log('delete worked');
  //     })
  //     .catch((err) => {
  //       setIsError(true);
  //     });
  // }, [deleteClicked]);

  return (
    <article className="comment-card">
      <p>
        <span className="comment-author">{author}</span> commented...
      </p>
      <p>{body}</p>
      <p>
        Votes: <span className="comment-votes">{votes}</span>
      </p>
      <p className="time-date">Published on: {dateAndTime.date}</p>
      {user === author ? (
        <div className="delete-comment">
          <button
            onClick={(e) => {
              handleClick(e);
            }}
          >
            delete comment
          </button>
        </div>
      ) : null}
    </article>
  );
};
