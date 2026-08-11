const { test: base } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const PimPage = require('../pages/PimPage');
const LeavePage = require('../pages/LeavePage');
const DirectoryPage = require('../pages/DirectoryPage');

const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    pimPage: async ({ page }, use) => {
        await use(new PimPage(page));
    },

    leavePage: async ({ page }, use) => {
        await use(new LeavePage(page));
    },

    directoryPage: async ({ page }, use) => {
        await use(new DirectoryPage(page));
    }
});

module.exports = {
    test,
    expect: base.expect
};
