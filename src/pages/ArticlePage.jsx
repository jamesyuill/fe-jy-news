import { useParams } from 'react-router-dom';
import { ArticleFull } from '../components/ArticleFull';
import { CommentsComp } from '../components/CommentsComp';
import { useEffect, useState } from 'react';
import { getArticleById } from '../utils/api';
import { VotesComp } from '../components/VotesComp';

export const ArticlePage = () => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, []);

  return (
    <article className="article-page">
      <ArticleFull article={article} />
      <VotesComp article={article} />
      <CommentsComp article={article} />
    </article>
  );
};
