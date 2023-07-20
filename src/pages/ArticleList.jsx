import { useEffect, useState } from 'react';

import { ArticleCard } from '../components/ArticleCard';
import { getAllArticles } from '../utils/api';
import { useParams, useSearchParams } from 'react-router-dom';
import { SortComp } from '../components/SortComp';

export const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
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
        setIsError(true);
      });
  }, [topic, sortByQuery, orderQuery]);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <article className="article-list">
      <h2>{topic ? `${topic}` : 'All Articles'} List</h2>
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
