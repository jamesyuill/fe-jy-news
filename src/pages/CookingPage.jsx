import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getArticlesByTopic } from '../utils/api';

export const CookingPage = () => {
  const [cookingArticles, setCookingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticlesByTopic('cooking')
      .then(({ articles }) => {
        setCookingArticles(articles);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  });
  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }
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
