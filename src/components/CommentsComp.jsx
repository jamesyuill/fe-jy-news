import { useEffect, useState } from 'react';
import { getCommentsByArticleId } from '../utils/api';
import { CommentCard } from './CommentCard';

export const CommentsComp = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsError(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, [article_id]);

  if (isError) {
    return <p>Something went wrong with the loading of the comments</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments-comp">
      <p>Comments: {comments.length}</p>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
