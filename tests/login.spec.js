const { test, expect } = require('../fixtures/baseFixture');
const loadTestData = require('../utils/testDataLoader');

const loginData = loadTestData('loginTestData.json');

test.describe('Login Tests', () => {
    test('TC001 - Verify successful login', async ({ loginPage, dashboardPage }) => {
        await loginPage.goto();

        await loginPage.login(
            loginData.validLogin.username,
            loginData.validLogin.password
        );

        await expect(dashboardPage.dashboardHeader).toBeVisible();
        await expect(dashboardPage.dashboardHeader).toHaveText('Dashboard');
    });

    test('TC002 - Verify error message for invalid login', async ({ loginPage }) => {
        await loginPage.goto();

        await loginPage.login(
            loginData.invalidLogin.username,
            loginData.invalidLogin.password
        );

        await expect(loginPage.invalidCredentials).toBeVisible();
        await expect(loginPage.invalidCredentials).toHaveText('Invalid credentials');
    });
});
