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
}) => {
  return (
    <article className="article-full">
      <img src={article_img_url} alt={title} />
      <h2>{title}</h2>
      <p>By {author}</p>
      <p>{body}</p>
      <p>Topic: {topic}</p>
      <p>Published: {created_at}</p>
    </article>
  );
};
