import { useEffect, useState } from 'react';

import { ArticleCard } from '../components/ArticleCard';
import { getAllArticles } from '../utils/api';
import { useParams, useSearchParams } from 'react-router-dom';
import { SortComp } from '../components/SortComp';

export const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { topic } = useParams();
  const sortByQuery = searchParams.get('sort_by') || 'created_at';
  const orderQuery = searchParams.get('order') || 'asc';

  const params = {
    params: { filter_by: topic, sort_by: sortByQuery, order: orderQuery },
  };

  useEffect(() => {
    getAllArticles(params)
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [topic, sortByQuery, orderQuery]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (error) {
    return (
      <p>
        <ErrorComp message={error} />
      </p>
    );
  }

  return (
    <article className="article-list">
      <h2>{topic ? `Articles about ${topic}` : 'All Articles'}</h2>
      <SortComp searchParams={searchParams} setSearchParams={setSearchParams} />
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
