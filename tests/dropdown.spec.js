const { test, expect } = require('../fixtures/baseFixture');
const loadTestData = require('../utils/testDataLoader');

test.describe('Dropdown Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

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

test('TC041 - Verify that Reports dropdown is clickable on Leave page', async({ leavePage }) => {
        await leavePage.openLeave();

        await leavePage.clickReportsDropdown();

        await expect(leavePage.reportsDropdown).toBeVisible();
    });

test('TC-042 - Verify that Configure dropdown is clickable on Leave page', async({ leavePage }) => {
        await leavePage.openLeave();

        await leavePage.clickConfigureDropdown();

        await expect(leavePage.configureDropdown).toBeVisible();
    });

test('TC043 - Verify that Timesheets dropdown is clickable on Time page', async({ timePage }) => {
        await timePage.openTime();

        await timePage.clickTimesheetsDropdown();

        await expect(timePage.timesheetsDropdown).toBeVisible();
    });

test('TC044 - Verify that Attendance dropdown is clickable on Time page', async({ timePage }) => {
        await timePage.openTime();

        await timePage.clickAttendanceDropdown();

        await expect(timePage.attendanceDropdown).toBeVisible();
    });

test('TC045 - Verify that Reports dropdown is clickable on Time page', async({ timePage }) => {
        await timePage.openTime();

        await timePage.clickReportsDropdown();

        await expect(timePage.reportsDropdown).toBeVisible();
    });

test('TC046 - Verify that Project Info dropdown is clickable on Time page', async({ timePage }) => {
        await timePage.openTime();

        await timePage.clickProjectInfoDropdown();

        await expect(timePage.projectInfoDropdown).toBeVisible();
    });

test('TC047 - Verify that Configure dropdown is clickable on Performance page',async({ performancePage }) => {
        await performancePage.openPerformance();

        await performancePage.clickConfigureDropdown();

        await expect(performancePage.configureDropdown).toBeVisible();
    });

test('TC048 - Verify that Manage Reviews dropdown is clickable on Performance page', async({ performancePage }) => {
        await performancePage.openPerformance();

        await performancePage.clickManageReviewsDropdown();

        await expect(performancePage.manageReviewsDropdown).toBeVisible();
});

test('TC049 - Verify that Configuration dropdown is clickable on Claim Page', async({ claimPage }) => {
        await claimPage.openClaim();

        await claimPage.clickConfigurationDropdown();

        await expect(claimPage.configurationDropdown).toBeVisible();

})

});