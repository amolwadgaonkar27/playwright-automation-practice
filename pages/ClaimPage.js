const navigationLocators = require('../locators/navigationLocators');

class ClaimPage {
    constructor(page) {
        this.page = page;
        this.claimHeader = page.locator(navigationLocators.claimHeader);
    }

    async isClaimPageVisible() {
        return await this.claimHeader.isVisible();
    }
}

module.exports = ClaimPage;