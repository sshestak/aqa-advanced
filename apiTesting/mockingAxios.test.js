jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
  })),
}));

const { apiClient, getPosts } = require('./apiClient');

describe('Mocking Axios in Jest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should successfully fetch posts', async () => {
    const mockPosts = [
      {
        id: 1,
        title: 'First post',
        body: 'Test post body',
      },
      {
        id: 2,
        title: 'Second post',
        body: 'Another test post',
      },
    ];

    apiClient.get.mockResolvedValue({
      data: mockPosts,
    });

    const result = await getPosts();

    expect(result).toEqual(mockPosts);
    expect(apiClient.get).toHaveBeenCalledWith('/posts');
  });

  test('Should handle failed HTTP request', async () => {
    const mockError = new Error('Request failed with status code 500');

    apiClient.get.mockRejectedValue(mockError);

    await expect(getPosts()).rejects.toThrow('Request failed with status code 500');

    expect(apiClient.get).toHaveBeenCalledWith('/posts');
  });
});
