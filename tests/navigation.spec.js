const { test, expect } = require('../fixtures/baseFixture');
const loadTestData = require('../utils/testDataLoader');

test.describe('Navigation Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
    });

test('TC006 - Verify user can navigate to Admin Page', async ({ dashboardPage, adminPage }) => {
        await dashboardPage.openAdmin();

        await expect(adminPage.adminHeader).toHaveText('Admin/User Management');

        expect(await adminPage.isAdminPageVisible()).toBeTruthy();

        await expect(adminPage.userManagementTab).toBeVisible();
        await expect(adminPage.jobTab).toBeVisible();
    });

test('TC007 - Verify user can navigate to PIM Page', async ({ dashboardPage, pimPage }) => {
        await dashboardPage.openPIM();

        await expect(pimPage.pimHeader).toHaveText('PIM');

        expect(await pimPage.isPIMPageVisible()).toBeTruthy();

        await expect(pimPage.employeeListTab).toBeVisible();
        await expect(pimPage.addEmployeeTab).toBeVisible();
    });

test('TC008 - Verify user can navigate to Time Page', async ({ dashboardPage, timePage }) => {
        await dashboardPage.openTime();

        expect(await timePage.isTimePageVisible()).toBeTruthy();
        
        await expect(timePage.timeHeader).toHaveText('Time/Timesheets');
        expect(await timePage.isTimePageVisible()).toBeTruthy();
    });

test('TC009 - Verify user can navigate to Recruitment Page', async ({ dashboardPage, recruitmentPage }) => {
        await dashboardPage.openRecruitment();

        await expect(recruitmentPage.recruitmentHeader).toHaveText('Recruitment');

        expect(await recruitmentPage.isRecruitmentPageVisible()).toBeTruthy();

        await expect(recruitmentPage.candidatesTab).toBeVisible();
        await expect(recruitmentPage.vacanciesTab).toBeVisible();
    });

test('TC010 - Verify user can navigate to My Info Page', async ({ dashboardPage, myInfoPage }) => {
        await dashboardPage.openMyInfo();

        await expect(myInfoPage.myInfoHeader).toHaveText('My Info');

        expect(await myInfoPage.isMyInfoPageVisible()).toBeTruthy();

        await expect(myInfoPage.personalDetailsTab).toBeVisible();
        await expect(myInfoPage.contactDetailsTab).toBeVisible();
    });
});