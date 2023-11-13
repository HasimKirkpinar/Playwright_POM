import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.hasimkirkpinar.com/');
  await page.getByRole('link').first().click();
  await page.getByRole('link', { name: 'ABOUT ME' }).click();
  await page.getByRole('link', { name: 'CONTACTS' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Hasim Kirkpinar').click();
  await page.getByRole('link').first().click();
  await page.getByRole('link', { name: 'ABOUT ME' }).click();
  await page.getByRole('link', { name: 'CONTACTS' }).click();
  await page.getByPlaceholder('Your name').click();
  await page.getByPlaceholder('Your name').fill('linda');
  await page.getByPlaceholder('Your email address').click();
  await page.getByPlaceholder('Your email address').fill('lh@g.com');
  await page.locator('div').filter({ hasText: /^Message\*$/ }).click();
  await page.getByPlaceholder('Enter your message').click();
  await page.getByPlaceholder('Enter your message').fill('dffebhgnhgmnjm');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Thank You!').click();
});

// to code generater: npx playwright codegen