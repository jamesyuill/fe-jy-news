import axios from 'axios';

const api = axios.create({ baseURL: 'https://jy-news.onrender.com/api' });

export const getAllArticles = () => {
  return api.get(`/articles`).then((res) => res.data);
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((res) => res.data);
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((res) => res.data);
};

export const getMostRecentArticles = () => {
  return api
    .get(`/articles?sort_by=created_at&limit_by=5`)
    .then((res) => res.data);
};
