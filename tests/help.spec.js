const { test, expect } = require('../fixtures/baseFixture');
import { AdminPage } from '../pages/AdminPage';
import { PimPage } from '../pages/PimPage';
import { LeavePage } from '../pages/LeavePage';
import { TimePage } from '../pages/TimePage';
import { RecruitmentPage } from '../pages/RecruitmentPage';
import MyInfoPage from '../pages/MyInfoPage';
import PerformancePage from '../pages/PerformancePage';
import DashboardPage from '../pages/DashboardPage';
import DirectoryPage from '../pages/DirectoryPage';

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

    const Admin = new AdminPage(page);
    await Admin.clickAdminOption();
    const page1Promise = page.waitForEvent('popup');
    await Admin.helpOption.click();
    const page1 = await page1Promise;
  });

  test('TC051 - Verify that help button is clickable on PIM page', async ({ page }) => {

    const Pim = new PimPage(page);
    await Pim.clickPimOption();
    const page1Promise = page.waitForEvent('popup');
    await Pim.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC052 - Verify that help button is clickable on Leave page', async ({ page }) => {

    const Leave = new LeavePage(page);
    await Leave.clickLeaveOption();
    const page1Promise = page.waitForEvent('popup');
    await Leave.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC053 - Verify that help button is clickable on Time page', async ({ page }) => {

    const Time = new TimePage(page);
    await Time.clickTimeOption();
    const page1Promise = page.waitForEvent('popup');
    await Time.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC054 - Verify that help button is clickable on Recruitment page', async ({ page }) => {

    const Recruitment = new RecruitmentPage(page);
    await Recruitment.clickRecruitmentOption();
    const page1Promise = page.waitForEvent('popup');
    await Recruitment.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC055 - Verify that help button is clickable on My Info page', async ({ page }) => {

    const Myinfo = new MyInfoPage(page);
    await Myinfo.clickMyInfoOption();
    const page1Promise = page.waitForEvent('popup');
    await Myinfo.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC056 - Verify that help button is clickable on Performance page', async ({ page }) => {

    const Performance = new PerformancePage(page);
    await Performance.clickPerformanceOption();
    const page1Promise = page.waitForEvent('popup');
    await Performance.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC057 - Verify that help button is clickable on Dashboard page', async ({ page }) => {

    const Dashboard = new DashboardPage(page);
    await Dashboard.clickDashboardOption();
    const page1Promise = page.waitForEvent('popup');
    await Dashboard.clickHelpOption();
    const page1 = await page1Promise;
  });

  test('TC058 - Verify that help button is clickable on Directory page', async ({ page }) => {

    const Directory = new DirectoryPage(page);
    await Directory.clickDirectoryOption();
    const page1Promise = page.waitForEvent('popup');
    await Directory.clickHelpOption();
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
