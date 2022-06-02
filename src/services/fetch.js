import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    per_page: 20,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    key: '27144751-892a725032099e3eb90bcbf85',
  },
});

const fetchQuery = async (query, page) => {
  const response = await instance.get('/?', {
    params: {
      q: query,
      page,
    },
  });
  return response;
};

export const API = {
  fetch: fetchQuery,
};
