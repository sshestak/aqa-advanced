const axios = require('axios');
const config = require('../config/config');

const apiClient = axios.create({
  baseURL: config.baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = apiClient;
