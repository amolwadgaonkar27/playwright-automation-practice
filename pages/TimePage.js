const navigationLocators = require('../locators/navigationLocators');
const dropDownLocators = require('../locators/dropdownLocators');

class TimePage {
    constructor(page) {
        this.page = page;
        this.timePageHeader = page.locator(navigationLocators.timeHeader);
        this.timeSheetDropdown = dropDownLocators.timesheetsDropdown(page);
        this.timeMenu = navigationLocators.timeMenu(page);
        this.attendanceDropdown = dropDownLocators.attendanceDropdown(page);
        this.reportsDropdown = dropDownLocators.reportsDropdown(page);
    }

    async isTimePageVisible() {
        return await this.timePageHeader.isVisible();
    }

    async clickTimeSheetDropdown() {
        await this.timeSheetDropdown.click();
    }

    async clickTimeMenu() {
        await this.timeMenu.click();
    }

    async clickAttendanceDropdown() {
        await this.attendanceDropdown.click();
    }

    async clickReportsDropdown() {
        await this.reportsDropdown.click();
    }
}

module.exports = TimePage;