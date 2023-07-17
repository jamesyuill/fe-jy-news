export const getAllArticles = () => {
  return fetch('https://jy-news.onrender.com/api/articles').then((response) =>
    response.json()
  );
};
