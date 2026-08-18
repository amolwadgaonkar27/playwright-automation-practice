const navigationLocators = require('../locators/navigationLocators');

class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminHeader = page.locator(navigationLocators.adminHeader);
        this.nationalitiesButton = page.locator(navigationLocators.nationalitiesButton);
        this.corporateBrandingButton = page.locator(navigationLocators.corporateBrandingButton);
    }

    async isAdminPageVisible() {
        return await this.adminHeader.isVisible();
    }
    
    async clickNationalities() {
        await this.nationalitiesButton.click();
    }

    async clickCorporateBranding() {
        await this.corporateBrandingButton.click();
    }
}

module.exports = AdminPage;