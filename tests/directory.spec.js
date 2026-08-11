const { test, expect } = require('../fixtures/baseFixture');
const loadTestData = require('../utils/testDataLoader');

const directoryData = loadTestData('directoryTestData.json');

test.describe('Directory Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
    });

    test('TC005 - Search employee in Directory', async ({ dashboardPage, directoryPage }) => {
        await dashboardPage.openDirectory();

        await expect(directoryPage.directoryHeader).toHaveText('Directory');

        await directoryPage.searchEmployee(
            directoryData.searchEmployee.employeeName
        );

        await expect(directoryPage.directoryCards.first()).toBeVisible();

        const employeeCount = await directoryPage.getEmployeeCardCount();

        expect(employeeCount).toBeGreaterThan(0);
    });
});
