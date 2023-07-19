import { useParams } from 'react-router-dom';
import { ArticleFull } from '../components/ArticleFull';
import { CommentsList } from '../components/CommentsList';
import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';
import { VotesComp } from '../components/VotesComp';
import formatDateTime from '../utils/formatDateTime';

export const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [dateAndTime, setDateAndTime] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then(({ article }) => {
        setIsLoading(false);
        setIsError(false);
        setArticle(article);
        setDateAndTime(formatDateTime(article.created_at));
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
      <ArticleFull article={article} dateAndTime={dateAndTime} />
      <VotesComp article={article} />
      <CommentsList article_id={article_id} />
    </article>
  );
};
