export const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <h3>{article.title}</h3>
      <img src={article.article_img_url} alt={article.title} />
      <p>Topic: {article.topic}</p>
    </div>
  );
};
