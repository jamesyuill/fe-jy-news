import { useEffect, useState } from 'react';
import { getMostRecentArticles } from '../utils/api';
import { ArticleCard } from '../components/ArticleCard';

export const MostRecentArticles = () => {
  const [mostRecent5Articles, setMostRecent5Articles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMostRecentArticles()
      .then(({ articles }) => {
        setMostRecent5Articles(articles);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <article className="article-list">
      <h2>Most Recent Articles</h2>
      <ul>
        {mostRecent5Articles.map((article) => {
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
