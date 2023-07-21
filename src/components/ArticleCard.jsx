import { Link } from 'react-router-dom';
import formatDateTime from '../utils/formatDateTime';

export const ArticleCard = ({
  article: {
    article_id,
    title,
    article_img_url,
    topic,
    created_at,
    comment_count,
    votes,
  },
}) => {
  const dateAndTime = formatDateTime(created_at);

  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3>
          <span className="article-card-span">{title}</span>
        </h3>
      </Link>
      <img src={article_img_url} alt={title} />
      <p>Topic: {topic}</p>
      <p>Published on: {dateAndTime.date}</p>
      <p>Comment count: {comment_count}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};
