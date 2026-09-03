const { test, expect } = require('../fixtures/baseFixture');

const loadTestData = require('../utils/testDataLoader');
const loginData = loadTestData('loginTestData.json');

test.describe('Help Tests', () => {
  test.beforeEach(async ({ loginPage, dashboardPage }) => {
    await loginPage.goto();
    await loginPage.login(
      loginData.validLogin.username,
      loginData.validLogin.password
    );

    await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
  });

  test('TC050 - Verify that help button is clickable on Admin page', async ({ page }) => {
    await page.getByRole('link', { name: 'Admin' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC051 - Verify that help button is clickable on PIM page', async ({ page }) => {
    await page.getByRole('link', { name: 'PIM' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC052 - Verify that help button is clickable on Leave page', async ({ page }) => {
    await page.getByRole('link', { name: 'Leave' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC053 - Verify that help button is clickable on Time page', async ({ page }) => {
    await page.getByRole('link', { name: 'Time' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC054 - Verify that help button is clickable on Recruitment page', async ({ page }) => {
    await page.getByRole('link', { name: 'Recruitment' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC055 - Verify that help button is clickable on My Info page', async ({ page }) => {
    await page.getByRole('link', { name: 'My Info' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC056 - Verify that help button is clickable on Performance page', async ({ page }) => {
    await page.getByRole('link', { name: 'Performance' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC057 - Verify that help button is clickable on Dashboard page', async ({ page }) => {
    await page.getByRole('link', { name: 'Dashboard' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC058 - Verify that help button is clickable on Directory page', async ({ page }) => {
    await page.getByRole('link', { name: 'Directory' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC059 - Verify that help button is clickable on Claim page', async ({ page }) => {
    await page.getByRole('link', { name: 'Claim' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });

  test('TC060 - Verify that help button is clickable on Buzz page', async ({ page }) => {
    await page.getByRole('link', { name: 'Buzz' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByTitle('Help').click();
    const page1 = await page1Promise;
  });


});
