const dropDownLocators = require('../locators/dropdownLocators');
const navigationLocators = require('../locators/navigationLocators');
const performanceLocators = require('../locators/performanceLocators');

class PerformancePage {
    constructor(page) {
        this.page = page;
        this.performanceHeader = page.locator(navigationLocators.performanceHeader);
        this.myTrackersButton = page.locator(navigationLocators.myTrackersButton);
        this.employeeTrackerButton = page.locator(navigationLocators.employeeTrackerButton);
        this.configureDropdown = dropDownLocators.configureDropdown(page);
        this.performanceMenu = performanceLocators.performanceMenu(page);
        this.manageReviewsDropdown = dropDownLocators.manageReviewsDropdown(page);
    }

    async isPerformancePageVisible() {
        return await this.performanceHeader.isVisible();
    }

    async clickMyTrackersButton() {
        await this.myTrackersButton.click();
    }

    async clickEmployeeTrackerButton() {
        await this.employeeTrackerButton.click();
    }

    async clickConfigureDropdown() {
        await this.configureDropdown.click()
    }

    async openPerformance() {
        await this.performanceMenu.click();
    }

    async clickManageReviewsDropdown(){
        await this.manageReviewsDropdown.click();
    }


}

module.exports = PerformancePage;