const navigationLocators = require('../locators/navigationLocators');

class MyInfoPage {
    constructor(page) {
        this.page = page;
        this.personalDetailsHeader = page.locator(navigationLocators.myInfoHeader);
        this.myInfoOption = page.getByRole('link', { name: 'My Info' });
        this.helpOption = page.getByTitle('Help');
    }

    async clickHelpOption() {
        await this.helpOption.click();
    }

    async clickMyInfoOption() {
        await this.myInfoOption.click();
    }



    async isPersonalDetailsHeaderVisible() {
        return await this.personalDetailsHeader.isVisible();
    }
}

module.exports = MyInfoPage;