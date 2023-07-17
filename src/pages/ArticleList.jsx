import { ArticleCard } from '../components/ArticleCard';

export const ArticleList = ({ articleList }) => {
  return (
    <div className="article-list">
      <h2>Article List</h2>
      <ul>
        {articleList.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
