const { getInvalidUrl } = require('./apiClient');

describe('API Error Handling', () => {
  test('Should handle error for invalid URL', async () => {
    await expect(getInvalidUrl()).rejects.toThrow('Failed to fetch data');
  });
});
