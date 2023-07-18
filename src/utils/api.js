import axios from 'axios';

const api = axios.create({ baseURL: 'https://jy-news.onrender.com/api' });

export const getAllArticles = () => {
  return api.get(`/articles`).then((res) => res.data);
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => res.data);
};
