import { Link } from 'react-router-dom';

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
  return (
    <div className="article-card">
      <Link to={`/articles/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <img src={article_img_url} alt={title} />
      <p>Topic: {topic}</p>
      <p>Date posted: {created_at}</p>
      <p>Comment count: {comment_count}</p>
    </div>
  );
};
