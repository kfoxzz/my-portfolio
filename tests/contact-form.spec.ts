import { test, expect, Page } from '@playwright/test';

const selectors = {
  contactMeButton: 'button:has-text("Contact me")',
  nameInput: 'input[name="name"]',
  emailInput: 'input[name="email"]',
  messageInput: 'textarea[name="message"]',
  sendButton: 'button:has-text("Send")',
  formFieldError: 'div:has-text("Please fill out all fields.")',
  requestError: 'div:has-text("Something went wrong. Please try again.")',
};

const formData = {
  name: 'John Doe',
  email: 'testytest@kristizentner.com',
  message: 'This is a test message',
};

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

const fillInContactForm = async (page: Page, { name, email, message }: Record<string, string>) => {
  await page.waitForSelector(selectors.nameInput);
  await page.fill(selectors.nameInput, name);
  await page.fill(selectors.emailInput, email);
  await page.fill(selectors.messageInput, message);
};

test('can submit contact form with correct request fields', async ({ page }) => {
  await page.route('**/api/send-email', route => {
    route.fulfill({
      status: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: 'Test success' }),
    });
  });

  await page.waitForSelector(selectors.contactMeButton);
  await page.click(selectors.contactMeButton);

  await fillInContactForm(page, formData);

  page.on('request', request => {
    const requestPostData = request.postData() ?? '';
    const requestBody = JSON.parse(requestPostData);

    expect(request.method()).toBe('POST');
    expect(requestBody.name).toBe('John Doe');
    expect(requestBody.email).toBe('testytest@kristizentner.com');
    expect(requestBody.message).toBe('This is a test message');
  });

  await page.click(selectors.sendButton);
  await page.waitForSelector('text=Sent!');
});

test('cannot submit contact form with missing fields', async ({ page }) => {
  await page.waitForSelector(selectors.contactMeButton);
  await page.click(selectors.contactMeButton);

  await fillInContactForm(page, {
    ...formData,
    name: '',
  });

  await page.click(selectors.sendButton);

  expect(await page.isVisible(selectors.formFieldError)).toBe(true);

  await fillInContactForm(page, {
    ...formData,
    email: '',
  });

  await page.click(selectors.sendButton);
  expect(await page.isVisible(selectors.formFieldError)).toBe(true);

  await fillInContactForm(page, {
    ...formData,
    message: '',
  });

  await page.click(selectors.sendButton);
  expect(await page.isVisible(selectors.formFieldError)).toBe(true);
});

test.only('error message is displayed if contact form submission fails', async ({ page }) => {
  await page.route('**/api/send-email', route => {
    route.fulfill({
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: 'Test failure' }),
    });
  });

  await page.waitForSelector(selectors.contactMeButton);
  await page.click(selectors.contactMeButton);

  await fillInContactForm(page, formData);

  await page.click(selectors.sendButton);

  expect(await page.isVisible(selectors.requestError)).toBe(true);
});
