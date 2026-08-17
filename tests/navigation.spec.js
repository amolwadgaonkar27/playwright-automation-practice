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

test('TC011 - Verify user can navigate to Claim Page', async ({ dashboardPage, claimPage }) => {
        await expect(claimPage.claimHeader).toHaveText('Claim');

        expect(await claimPage.isClaimPageVisible()).toBeTruthy();

        await expect(claimPage.claimListTab).toBeVisible();
        await expect(claimPage.applyClaimTab).toBeVisible();
    });

test('TC012 - Verify user can navigate to Buzz Page', async ({ dashboardPage, buzzPage }) => {

        await expect(buzzPage.buzzHeader).toHaveText('Buzz');

        expect(await buzzPage.isBuzzPageVisible()).toBeTruthy();

        await expect(buzzPage.feedTab).toBeVisible();
        await expect(buzzPage.myBuzzTab).toBeVisible();
    });

test('TC013 - Verify user can navigate to Performance Page', async ({ dashboardPage, performancePage }) => {

        await expect(performancePage.performanceHeader).toHaveText('Performance/Manager Reviews');

        expect(await performancePage.isPerformancePageVisible()).toBeTruthy();

        await expect(performancePage.dashboardTab).toBeVisible();
        await expect(performancePage.manageReviewsTab).toBeVisible();
    });

test('TC014 - Verify user can navigate to Maintenance Page', async ({ dashboardPage, maintenancePage }) => {

        await click(dashboardPage.maintenanceMenu);

        await expect(maintenancePage.maintenanceHeader).toHaveText('Administrator Access');

        expect(await maintenancePage.isMaintenancePageVisible()).toBeTruthy();
    });

test('TC015 - Verify user can navigate to Leave Page by clicking on Allocate leave button', async ({ dashboardPage, leavePage }) => {

        await click(dashboardPage.assignLeaveButton);

        await expect(dashboardPage.assignLeaveButton).toHaveText('Assign Leave');
        await expect(leavePage.leaveHeader).toHaveText('Leave');

        expect(await leavePage.isLeavePageVisible()).toBeTruthy();
    });

test('TC016 - Verify user can navigate to Leave Page by clicking on Leave List button', async ({ dashboardPage, leavePage }) => {
        await click(dashboardPage.leaveList);

        await expect(dashboardPage.leaveListButton).toHaveText('Leave List');
        await expect(leavePage.leaveHeader).toHaveText('Leave');

        expect(await leavePage.isLeavePageVisible()).toBeTruthy();
    });

test('TC017 - Verify user can navigate to Timesheet Page by clicking on Timesheet button', async ({ dashboardPage, timePage }) => {
        
        await click(dashboardPage.timeSheet);

        await expect(dashboardPage.timeSheetButton).toHaveText('Timesheets');
        await expect(timePage.timeHeader).toHaveText('Time/Timesheets');

        expect(await timePage.isTimePageVisible()).toBeTruthy();
    });

test('TC018 - Verify user can navigate to Leave page by clicking on Apply Leave button', async ({ dashboardPage, leavePage }) => {
        
        await click(dashboardPage.applyLeaveButton);

        await expect(dashboardPage.applyLeaveButton).toHaveText('Apply Leave');
        await expect(leavePage.leaveHeader).toHaveText('Leave');

        expect(await leavePage.isLeavePageVisible()).toBeTruthy();
    });

test('TCO019 - Verify user can navigate to Leave page by clicking on My Leave button', async ({ dashboardPage, leavePage }) => {
        await click(dashboardPage.myLeaveButton);

        await expect(dashboardPage.myLeaveButton).toHaveText('My Leave');
        await expect(leavePage.leaveHeader).toHaveText('Leave');

        expect(await leavePage.isLeavePageVisible()).toBeTruthy();
    });

test('TC020 - Verify user can navigate to Timesheet page by clicking on My Timesheet button', async ({ dashboardPage, timePage }) => {
        await click(dashboardPage.myTimesheetButton);

        await expect(dashboardPage.myTimesheetButton).toHaveText('My Timesheet');
        await expect(timePage.timeHeader).toHaveText('Time/Timesheets');

        expect(await timePage.isTimePageVisible()).toBeTruthy();
    }); 

});