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
        Topic: <span className="article-topic">{topic}</span>
      </p>
      <p className="time-date">Published on: {dateAndTime.date}</p>
    </article>
  );
};
