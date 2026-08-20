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
});