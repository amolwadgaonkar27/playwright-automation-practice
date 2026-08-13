const navigationLocators = require('../locators/navigationLocators');

class MyInfoPage {
    constructor(page) {
        this.page = page;
        this.personalDetailsHeader = page.locator(navigationLocators.myInfoHeader);
    }

    async isPersonalDetailsHeaderVisible() {
        return await this.personalDetailsHeader.isVisible();
    }
}

module.exports = MyInfoPage;