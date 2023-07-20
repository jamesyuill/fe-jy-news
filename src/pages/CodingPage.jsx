import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getArticlesByTopic } from '../utils/api';

export const CodingPage = () => {
  const [codingArticles, setCodingArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticlesByTopic('coding')
      .then(({ articles }) => {
        setCodingArticles(articles);
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
      <h2>Coding Articles</h2>
      <ul>
        {codingArticles.map((article) => {
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
