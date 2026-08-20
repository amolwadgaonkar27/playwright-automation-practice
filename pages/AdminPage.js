const navigationLocators = require('../locators/navigationLocators');
const dropDownLocators = require('../locators/dropdownLocators');

class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminHeader = page.locator(navigationLocators.adminHeader);
        this.nationalitiesButton = page.locator(navigationLocators.nationalitiesButton);
        this.corporateBrandingButton = page.locator(navigationLocators.corporateBrandingButton);
        this.userManagementDropdown = page.locator(dropDownLocators.userManagementDropdown);
        this.jobDropdown = page.locator(dropDownLocators.jobDropdown);
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

    async clickUserManagementDropdown() {
        await this.userManagementDropdown.click();
    }

    async clickJobDropdown() {
        await this.jobDropdown.click();
    }
}

module.exports = AdminPage;