import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getArticlesByTopic } from '../utils/api';

export const CookingPage = () => {
  const [cookingArticles, setCookingArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic('cooking').then(({ articles }) => {
      setCookingArticles(articles);
    });
  });

  return (
    <article className="article-list">
      <h2>Cooking Articles</h2>
      <ul>
        {cookingArticles.map((article) => {
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
