const axios = require('axios');
const apiClient = require('../apiTesting/apiClient');

describe('API testing', () => {
  // 1st request
  test('get user with the first id', async () => {
    const response = await apiClient.get('/users/1');

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  // 2nd request
  test('get post with the first id', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(typeof response.data.title).toBe('string');
  });

  // 3rd request
  test('create new post', async () => {
    const newPost = {
      title: "Svitlana's post",
      body: 'This is my test post',
      userId: 1,
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
    expect(response.data.body).toBe(newPost.body);
    expect(response.data).toHaveProperty('id');
  });

  // 4th request
  test('get todo with the 1st id', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
    expect(response.data).toHaveProperty('title');
  });

  // 5th request
  test('create new todo', async () => {
    const newTodo = {
      title: 'Learn Axios',
      userId: 1,
    };

    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);

    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newTodo.title);
    expect(response.data).toHaveProperty('id');
  });
});
