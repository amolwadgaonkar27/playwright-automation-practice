const navigationLocators = require('../locators/navigationLocators');

class PerformancePage {
    constructor(page) {
        this.page = page;
        this.performanceHeader = page.locator(navigationLocators.performanceHeader);
    }

    async isPerformancePageVisible() {
        return await this.performanceHeader.isVisible();
    }
}

module.exports = PerformancePage;