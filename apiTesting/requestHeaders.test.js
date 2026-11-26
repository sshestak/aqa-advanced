const { apiClient, getPostsWithParams } = require('./apiClient');

describe('Testing Request Headers and Params', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Should send request with custom headers and URL params', async () => {
    const spy = jest.spyOn(apiClient, 'get').mockResolvedValue({
      data: [],
    });

    await getPostsWithParams();

    expect(spy).toHaveBeenCalledWith('/posts', {
      headers: {
        'X-Custom-Header': 'QA-Test',
        Accept: 'application/json',
      },
      params: {
        userId: 1,
        _limit: 5,
      },
    });
  });
});
