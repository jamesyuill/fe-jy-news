import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getAllArticles } from '../utils/api';

export const TopicPage = ({ slug }) => {
  const [articlesByTopic, setArticlesByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllArticles(slug)
      .then(({ articles }) => {
        setArticlesByTopic(articles);
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, [slug]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <article className="article-list">
      <h2>{slug} Articles</h2>
      <ul>
        {articlesByTopic.map((article) => {
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
