const { test, expect } = require('../fixtures/baseFixture');

test.describe('Leave Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
    });

    test('TC004 - Verify user can navigate to Leave module', async ({ dashboardPage, leavePage }) => {
        await dashboardPage.openLeave();

        await expect(leavePage.leaveHeader).toHaveText('Leave');

        expect(await leavePage.isLeavePageVisible()).toBeTruthy();

        await expect(leavePage.leaveList).toBeVisible();
        await expect(leavePage.applyLeave).toBeVisible();
    });
});
