const { test: base } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const PimPage = require('../pages/PimPage');
const LeavePage = require('../pages/LeavePage');
const DirectoryPage = require('../pages/DirectoryPage');
const MyInfoPage = require('../pages/MyInfoPage');
const AdminPage = require('../pages/AdminPage');
const TimePage = require('../pages/TimePage');
const RecruitmentPage = require('../pages/RecruitmentPage');
const ClaimPage = require('../pages/ClaimPage');
const BuzzPage = require('../pages/BuzzPage');
const PerformancePage = require('../pages/PerformancePage');
const MaintenancePage = require('../pages/MaintenancePage');

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
    },

    myInfoPage: async ({ page }, use) => {
        await use(new MyInfoPage(page));
    },

    adminPage: async ({ page }, use) => {
        await use(new AdminPage(page));
    },

    timePage: async ({ page }, use) => {
        await use(new TimePage(page));
    },

    recruitmentPage: async ({ page }, use) => {
        await use(new RecruitmentPage(page));
    },
    claimPage: async ({ page }, use) => {
        await use(new ClaimPage(page));
    },
    buzzPage: async ({ page }, use) => {
        await use(new BuzzPage(page));
    },
    performancePage: async ({ page }, use) => {
        await use(new PerformancePage(page));
    },
    maintenancePage: async ({ page }, use) => {
        await use(new MaintenancePage(page));
    }
});

module.exports = {
    test,
    expect: base.expect
};
