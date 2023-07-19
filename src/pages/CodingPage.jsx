import { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import { getArticlesByTopic } from '../utils/api';

export const CodingPage = () => {
  const [codingArticles, setCodingArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic('coding').then(({ articles }) => {
      setCodingArticles(articles);
    });
  });

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
