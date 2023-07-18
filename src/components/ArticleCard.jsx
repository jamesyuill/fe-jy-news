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
  },
}) => {
  const dateAndTime = formatDateTime(created_at);

  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={article_img_url} alt={title} />
      <p>Topic: {topic}</p>
      <p>
        Published at: {dateAndTime.time} - {dateAndTime.date}
      </p>
      <p>Comment count: {comment_count}</p>
    </div>
  );
};
