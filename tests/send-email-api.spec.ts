import { test, expect } from '@playwright/test';

const postData = {
  name: 'John Doe',
  email: 'apitest@kristizentner.com',
  message: 'API test',
};

test('/api/send-email returns 200 when correct post data is provided', async ({ request }) => {
  const response = await request.post('/api/send-email', { data: postData });

  expect(response.status()).toBe(200);
});
