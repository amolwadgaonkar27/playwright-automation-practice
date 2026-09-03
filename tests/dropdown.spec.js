const { test, expect } = require('../fixtures/baseFixture');

const loadTestData = require('../utils/testDataLoader');
const loginData = loadTestData('loginTestData.json');

test.describe('Dropdown Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login(
            loginData.validLogin.username,
            loginData.validLogin.password
        );

        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
    });

    test('TC-034 - Verify that User Management dropdown is clickable on Admin Page', async ({ dashboardPage, adminPage }) => {
        await dashboardPage.openAdmin();

        await expect(adminPage.adminHeader).toHaveText('Admin/User Management');

        await adminPage.clickUserManagementDropdown();

        await expect(adminPage.userManagementDropdown).toBeVisible();
    });

    test('TC035 - Verify that Job dropdown is clickable on Admin Page', async ({ dashboardPage, adminPage }) => {
        await dashboardPage.openAdmin();

        await expect(adminPage.adminHeader).toHaveText('Admin/User Management');

        await adminPage.clickJobDropdown();

        await expect(adminPage.jobDropdown).toBeVisible();
    });

    test('TC036 - Verify that Organization dropdown is clickable on Admin Page', async ({ dashboardPage, adminPage }) => {
        await dashboardPage.openAdmin();

        await expect(adminPage.adminHeader).toHaveText('Admin/User Management');

        await adminPage.clickOrganizationDropdown();

        await expect(adminPage.organizationDropdown).toBeVisible();
    });

    test('TC037 - Verify that Qualifications dropdown is clickable on Admin Page', async ({ dashboardPage, adminPage }) => {
        await dashboardPage.openAdmin();

        await expect(adminPage.adminHeader).toHaveText('Admin/User Management');

        await adminPage.clickQualificationsDropdown();

        await expect(adminPage.qualificationsDropdown).toBeVisible();
    });

    test('TC038 - Verify that Configuration dropdown is clickable on Admin Page', async ({ dashboardPage, adminPage }) => {
        await dashboardPage.openAdmin();

        await expect(adminPage.adminHeader).toHaveText('Admin/User Management');

        await adminPage.clickConfigurationDropdown();

        await expect(adminPage.configurationDropdown).toBeVisible();
    });

    test('TC039 - Verify that Configuration dropdown is clickable on PIM Page', async ({ dashboardPage, pimPage }) => {
        await dashboardPage.openPIM();

        await expect(pimPage.pimHeader).toHaveText('PIM');

        await pimPage.clickConfigurationDropdown();

        await expect(pimPage.configurationDropdown).toBeVisible();
    });

    test('TC040 - Verify that Entitlements dropdown is clickable on Leave Page', async ({ dashboardPage, leavePage }) => {
        await dashboardPage.openLeave();

        await expect(leavePage.leaveHeader).toHaveText('Leave');

        await leavePage.clickEntitlementsDropdown();

        await expect(leavePage.entitlementsDropdown).toBeVisible();
    });

    test('TC041 - Verify that Reports dropdown is clickable on Leave page', async ({ leavePage }) => {
        await leavePage.openLeave();

        await leavePage.clickReportsDropdown();

        await expect(leavePage.reportsDropdown).toBeVisible();
    });

    test('TC-042 - Verify that Configure dropdown is clickable on Leave page', async ({ leavePage }) => {
        await leavePage.openLeave();

        await leavePage.clickConfigureDropdown();

        await expect(leavePage.configureDropdown).toBeVisible();
    });

    test('TC043 - Verify that Timesheets dropdown is clickable on Time page', async ({ timePage }) => {
        await timePage.openTime();

        await timePage.clickTimesheetsDropdown();

        await expect(timePage.timesheetsDropdown).toBeVisible();
    });

    test('TC044 - Verify that Attendance dropdown is clickable on Time page', async ({ timePage }) => {
        await timePage.openTime();

        await timePage.clickAttendanceDropdown();

        await expect(timePage.attendanceDropdown).toBeVisible();
    });

    test('TC045 - Verify that Reports dropdown is clickable on Time page', async ({ timePage }) => {
        await timePage.openTime();

        await timePage.clickReportsDropdown();

        await expect(timePage.reportsDropdown).toBeVisible();
    });

    test('TC046 - Verify that Project Info dropdown is clickable on Time page', async ({ timePage }) => {
        await timePage.openTime();

        await timePage.clickProjectInfoDropdown();

        await expect(timePage.projectInfoDropdown).toBeVisible();
    });

    test('TC047 - Verify that Configure dropdown is clickable on Performance page', async ({ performancePage }) => {
        await performancePage.openPerformance();

        await performancePage.clickConfigureDropdown();

        await expect(performancePage.configureDropdown).toBeVisible();
    });

    test('TC048 - Verify that Manage Reviews dropdown is clickable on Performance page', async ({ performancePage }) => {
        await performancePage.openPerformance();

        await performancePage.clickManageReviewsDropdown();

        await expect(performancePage.manageReviewsDropdown).toBeVisible();
    });

    test('TC049 - Verify that Configuration dropdown is clickable on Claim Page', async ({ claimPage }) => {
        await claimPage.openClaim();

        await claimPage.clickConfigurationDropdown();

        await expect(claimPage.configurationDropdown).toBeVisible();

    })

    test('TC061 - Verify that Users option from dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByLabel('Topbar Menu').getByText('User Management').click();
        await page.getByRole('listitem').filter({ hasText: /^Users$/ }).click();
    });

    test('TC062 - Verify that Job Titles option from Job dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
        await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    });

    test('TC063 - Verify that Pay Grades  option from Job dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Pay Grades$/ }).click();
    });

    test('TC064 - Verify that Employment Status option from Job dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Employment Status$/ }).click();
    });

    test('TC065 - Verify that Job Categories option from Job dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Job Categories$/ }).click();
    });

    test('TC066 - Verify that Work Shifts option from Job dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ }).click();
    });

    test('TC067 - Verify that General Information option from Organization dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Organization' }).click();
        await page.getByRole('listitem').filter({ hasText: /^General Information$/ }).click();
        await expect(page.getByRole('heading', { name: 'General Information' })).toBeVisible();
    });

    test('TC068 - Verify that Locations option from Organization dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Organization' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Locations$/ }).click();
        await expect(page.getByRole('heading', { name: 'Locations' })).toBeVisible();
    });

    test('TC069 - Verify that Structure option from Organization dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Organization' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Structure$/ }).click();
        await expect(page.getByRole('heading', { name: 'Organization Structure' })).toBeVisible();
    });

    test('TC070 - Verify that Skills option from Qualifications dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Qualifications' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Skills$/ }).click();
        await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
    });

    test('TC071 - Verify that Education option from Qualifications dropdown is clickable on Admin Page', async ({ page }) => {
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByRole('listitem').filter({ hasText: 'Qualifications' }).click();
        await page.getByRole('listitem').filter({ hasText: /^Education$/ }).click();
        await expect(page.getByRole('heading', { name: 'Education' })).toBeVisible();
    });
});