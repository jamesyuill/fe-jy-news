import { Route, Routes } from 'react-router-dom';
import { ArticleList } from '../pages/ArticleList';
import { MostRecentArticles } from '../pages/MostRecentArticles';
import { ArticlePage } from '../pages/ArticlePage';

export const Content = () => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<MostRecentArticles />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />

        <Route path="/topics/:topic" element={<ArticleList />} />
      </Routes>
    </main>
  );
};
