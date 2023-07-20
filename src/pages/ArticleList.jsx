import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getAllArticles } from '../utils/api';
import { useParams } from 'react-router-dom';

export const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { topic } = useParams();

  useEffect(() => {
    if (topic) {
      setIsLoading(true);
      getAllArticles(topic)
        .then(({ articles }) => {
          setArticleList(articles);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
        });
    } else {
      setIsLoading(true);

      getAllArticles()
        .then(({ articles }) => {
          setArticleList(articles);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
        });
    }
  }, [topic]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <article className="article-list">
      <h2>{topic ? `${topic}` : 'All Articles'} List</h2>
      <ul>
        {articleList.map((article) => {
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
