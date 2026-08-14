const navigationLocators = require('../locators/navigationLocators');

class BuzzPage {
    constructor(page) {
        this.page = page;
        this.buzzHeader = page.locator(navigationLocators.buzzHeader);
    }

    async isBuzzPageVisible() {
        return await this.buzzHeader.isVisible();
    }
}

module.exports = BuzzPage;