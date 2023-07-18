import formatDateTime from '../utils/formatDateTime';

export const CommentCard = ({
  comment: { author, body, created_at, votes },
}) => {
  const dateAndTime = formatDateTime(created_at);

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
    </article>
  );
};
