const navigationLocators = require('../locators/navigationLocators');

class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminHeader = page.locator(navigationLocators.adminHeader);
    }

    async isAdminPageVisible() {
        return await this.adminHeader.isVisible();
    }
}

module.exports = AdminPage;