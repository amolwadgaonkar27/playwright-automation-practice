const { test, expect } = require('../fixtures/baseFixture');
const loadTestData = require('../utils/testDataLoader');

const pimData = loadTestData('pimTestData.json');

test.describe('PIM Tests', () => {
    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login('Admin', 'admin123');

        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
    });

    test('TC003 - Search employee in PIM', async ({ dashboardPage, pimPage }) => {
        await dashboardPage.openPIM();

        await expect(pimPage.employeeTable).toBeVisible();

        await pimPage.searchEmployee(
            pimData.searchEmployee.employeeName
        );

        const employeeCount = await pimPage.getEmployeeCount();

        expect(employeeCount).toBeGreaterThan(0);

        const employees = await pimPage.getEmployeeNames();

        expect(employees.join(' ')).toContain('Admin');
    });
});
