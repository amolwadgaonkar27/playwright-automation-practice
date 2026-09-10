const navigationLocators = require('../locators/navigationLocators');

class BuzzPage {
    constructor(page) {
        this.page = page;
        this.buzzHeader = page.locator(navigationLocators.buzzHeader);
        this.buzzOption = page.getByRole('link', { name: 'Buzz' });
        this.helpOption = page.getByTitle('Help');
    }

    async clickHelpOption() {
        await this.helpOption.click();
    }
    async clickBuzzOption() {
        await this.buzzOption.click();
    }

    async isBuzzPageVisible() {
        return await this.buzzHeader.isVisible();
    }
}

module.exports = BuzzPage;