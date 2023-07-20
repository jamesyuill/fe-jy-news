import axios from 'axios';

const api = axios.create({ baseURL: 'https://jy-news.onrender.com/api' });

export const getAllArticles = (topicName) => {
  return api
    .get(`/articles`, { params: { filter_by: topicName } })
    .then((res) => res.data);
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

export const getAllTopics = () => {
  return api.get(`/topics`).then((res) => res.data);
};

export const getArticlesByTopic = (topic) => {
  return api.get(`/articles?filter_by=${topic}`).then((res) => res.data);
};

export const patchVotesByArticleId = (article_id, newVote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: newVote })
    .then((res) => res.data);
};

export const postNewComment = (article_id, newComment) => {
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then((res) => res.data);
};

export const deleteCommentById = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((res) => res.data);
};
