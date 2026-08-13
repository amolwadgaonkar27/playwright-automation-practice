const navigationLocators = require('../locators/navigationLocators');

class TimePage {
    constructor(page) {
        this.page = page;
        this.timePageHeader = page.locator(navigationLocators.timeHeader);
    }

    async isTimePageVisible() {
        return await this.timePageHeader.isVisible();
    }
}

module.exports = TimePage;