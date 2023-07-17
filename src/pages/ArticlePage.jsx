import { useParams } from 'react-router-dom';
import { ArticleFull } from '../components/ArticleFull';
import { CommentsComp } from '../components/CommentsComp';
import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';
import { VotesComp } from '../components/VotesComp';
import formatDateTime from '../utils/formatDateTime';
let dateAndTime;
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
        dateAndTime = formatDateTime(article.created_at);
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
      <CommentsComp article={article} />
    </article>
  );
};
