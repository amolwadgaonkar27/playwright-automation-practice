const navigationLocators = require('../locators/navigationLocators');

class ClaimPage {
    constructor(page) {
        this.page = page;
        this.claimHeader = page.locator(navigationLocators.claimHeader);
        this.submitClaimButton = page.locator(navigationLocators.submitClaimButton);
        this.myClaimsButton = page.locator(navigationLocators.myClaimsButton);
        this.employeeClaimsButton = page.locator(navigationLocators.employeeClaimsButton);
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
}

module.exports = ClaimPage;