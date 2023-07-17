const baseUrl = 'https://jy-news.onrender.com/api';

export const getAllArticles = () => {
  return fetch(`${baseUrl}/articles`).then((response) => response.json());
};
