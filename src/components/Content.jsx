import { Route, Routes } from 'react-router-dom';
import { ArticleList } from '../pages/ArticleList';
import { MostRecentArticles } from '../pages/MostRecentArticles';
import { useEffect, useState } from 'react';
import { getAllArticles } from '../utils/api';

export const Content = () => {
  const [articleList, setArticleList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getAllArticles()
      .then(({ articles }) => {
        setArticleList(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
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
