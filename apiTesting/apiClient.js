const axios = require('axios');
const config = require('../config/config');

const apiClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getInvalidUrl() {
  try {
    await apiClient.get('/invalid-url');
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`, { cause: error });
  }
}

async function getPostsWithParams() {
  const response = await apiClient.get('/posts', {
    headers: {
      'X-Custom-Header': 'QA-Test',
      Accept: 'application/json',
    },
    params: {
      userId: 1,
      _limit: 5,
    },
  });

  return response.data;
}

async function getPosts() {
  const response = await apiClient.get('/posts');
  return response.data;
}

module.exports = {
  apiClient,
  getInvalidUrl,
  getPostsWithParams,
  getPosts,
};
