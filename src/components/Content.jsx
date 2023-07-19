import { Route, Routes } from 'react-router-dom';
import { ArticleList } from '../pages/ArticleList';
import { MostRecentArticles } from '../pages/MostRecentArticles';
import { useEffect, useState } from 'react';
import { getAllArticles } from '../utils/api';
import { ArticlePage } from '../pages/ArticlePage';
import { CodingPage } from '../pages/CodingPage';
import { CookingPage } from '../pages/CookingPage';
import { FootballPage } from '../pages/FootBallPage';

export const Content = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllArticles()
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
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
    <main className="content">
      <Routes>
        <Route path="/" element={<MostRecentArticles />} />
        <Route
          path="/articles"
          element={<ArticleList articleList={articleList} />}
        />
        <Route
          path="/articles/:article_id"
          element={
            <ArticlePage
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              isError={isError}
              setIsError={setIsError}
            />
          }
        />
        <Route path="/coding" element={<CodingPage />} />
        <Route path="/football" element={<FootballPage />} />
        <Route path="/cooking" element={<CookingPage />} />
      </Routes>
    </main>
  );
};
