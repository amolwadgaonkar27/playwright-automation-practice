const dropDownLocators = require('../locators/dropdownLocators');
const navigationLocators = require('../locators/navigationLocators');
const claimLocators = require('../locators/claimLocators')

class ClaimPage {
    constructor(page) {
        this.page = page;
        this.claimHeader = page.locator(navigationLocators.claimHeader);
        this.submitClaimButton = page.locator(navigationLocators.submitClaimButton);
        this.myClaimsButton = page.locator(navigationLocators.myClaimsButton);
        this.employeeClaimsButton = page.locator(navigationLocators.employeeClaimsButton);
        this.assignClaimButton = page.locator(navigationLocators.assignClaimButton);
        this.configurationDropdown = dropDownLocators.configurationDropdown(page);
        this.claimMenu = claimLocators.claimMenu(page);
    }

    async isClaimPageVisible() {
        return await this.claimHeader.isVisible();
    }

    async clickSubmitClaimButton() {
        await this.submitClaimButton.click();
    }

    async clickMyClaimsButton() {
        await this.myClaimsButton.click();
    }

    async clickEmployeeClaimsButton() {
        await this.employeeClaimsButton.click();
    }

    async clickAssignClaimButton() {
        await this.assignClaimButton.click();
    }

    async clickConfigurationDropdown() {
        await this.configurationDropdown.click();
    }

    async openClaim() {
        await this.claimMenu.click();
    }
}

module.exports = ClaimPage;