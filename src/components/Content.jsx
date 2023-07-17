import { Route, Routes } from 'react-router-dom';
import { ArticleList } from '../pages/ArticleList';
import { MostRecentArticles } from '../pages/MostRecentArticles';
import { useEffect, useState } from 'react';

export const Content = () => {
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    fetch('https://jy-news.onrender.com/api/articles')
      .then((response) => response.json())
      .then(({ articles }) => {
        setArticleList(articles);
      });
  }, []);

  return (
    <main className="content">
      <h2>content</h2>

      <Routes>
        <Route path="/" element={<MostRecentArticles />} />
        <Route
          path="/articles"
          element={<ArticleList articleList={articleList} />}
        />
      </Routes>
    </main>
  );
};
