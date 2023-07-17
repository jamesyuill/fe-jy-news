import { useParams } from 'react-router-dom';
import { ArticleFull } from '../components/ArticleFull';
import { CommentsComp } from '../components/CommentsComp';
import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';
import { VotesComp } from '../components/VotesComp';

export const ArticlePage = ({
  isLoading,
  setIsLoading,
  isError,
  setIsError,
}) => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setIsLoading(false);
        setArticle(article);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong...</p>;
  }

  return (
    <article className="article-page">
      <ArticleFull article={article} />
      <VotesComp article={article} />
      <CommentsComp article={article} />
    </article>
  );
};
