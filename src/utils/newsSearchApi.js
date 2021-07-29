/* eslint-disable max-len */
const API_KEY = process.env.API_KEY;

export const getNews = (searchTerm) => {
  return fetch(`https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`)
    .then(res => res.json());
};
