const navigationLocators = require('../locators/navigationLocators');

class PerformancePage {
    constructor(page) {
        this.page = page;
        this.performanceHeader = page.locator(navigationLocators.performanceHeader);
        this.myTrackersButton = page.locator(navigationLocators.myTrackersButton);
        this.employeeTrackerButton = page.locator(navigationLocators.employeeTrackerButton);
    }

    async isPerformancePageVisible() {
        return await this.performanceHeader.isVisible();
    }

    async clickMyTrackersButton() {
        await this.myTrackersButton.click();
    }

    async clickEmployeeTrackerButton() {
        await this.employeeTrackerButton.click();
    }
}

module.exports = PerformancePage;