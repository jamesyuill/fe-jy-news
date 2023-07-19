import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getArticlesByTopic } from '../utils/api';

export const FootballPage = () => {
  const [footballArticles, setFootballArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic('football').then(({ articles }) => {
      setFootballArticles(articles);
    });
  });

  return (
    <article className="article-list">
      <h2>Football Articles</h2>
      <ul>
        {footballArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <ArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </article>
  );
};
