import { test, expect } from '@playwright/test';

test('TC050 - Verify that help button is clickable on Admin page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('link', { name: 'Admin' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Help').click();
  const page1 = await page1Promise;
});

test('TC051 - Verify that help button is clickable on PIM page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('link', { name: 'PIM' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Help').click();
  const page1 = await page1Promise;
});

test('TC052 - Verify that help button is clickable on Leave page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('link', { name: 'Leave' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Help').click();
  const page1 = await page1Promise;
});

test('TC053 - Verify that help button is clickable on Time page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('link', { name: 'Time' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByTitle('Help').click();
  const page1 = await page1Promise;
});

