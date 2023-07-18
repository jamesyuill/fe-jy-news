export const CommentsComp = ({ article: { article_id, comment_count } }) => {
  return (
    <div className="comments-comp">
      <p>Comments: {comment_count}</p>
    </div>
  );
};
