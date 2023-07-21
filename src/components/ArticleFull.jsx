import { Link } from 'react-router-dom';

export const ArticleFull = ({
  article: {
    article_id,
    article_img_url,
    author,
    body,
    comment_count,
    created_at,
    title,
    topic,
    votes,
  },
  dateAndTime,
}) => {
  return (
    <article className="article-full">
      <img src={article_img_url} alt={title} />
      <h2>{title}</h2>
      <p>
        By <span className="article-author">{author}</span>
      </p>
      <p>{body}</p>
      <p>
        Topic:{' '}
        <Link to={`/topics/${topic}?sort_by=created_at&order=asc`}>
          <span className="article-topic">{topic}</span>
        </Link>
      </p>
      <p className="time-date">Published on: {dateAndTime.date}</p>
    </article>
  );
};
