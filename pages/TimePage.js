const navigationLocators = require('../locators/navigationLocators');
const dropDownLocators = require('../locators/dropdownLocators');
const timeLocators = require('../locators/timeLocators')

exports.TimePage = class TimePage {
    constructor(page) {
        this.page = page;
        this.timePageHeader = page.locator(navigationLocators.timeHeader);
        this.timeSheetDropdown = dropDownLocators.timesheetsDropdown(page);
        this.timeMenu = timeLocators.timeMenu(page);
        this.attendanceDropdown = dropDownLocators.attendanceDropdown(page);
        this.reportsDropdown = dropDownLocators.reportsDropdown(page);
        this.projectInfoDropdown = dropDownLocators.projectInfoDropdown(page);
        this.timeOption = page.getByRole('link', { name: 'Time' });
        this.helpOption = page.getByTitle('Help');
    }

    async clickHelpOption(){
        await this.helpOption.click();
    }

    async clickTimeOption(){
        await this.timeOption.click();
    }
    async isTimePageVisible() {
        return await this.timePageHeader.isVisible();
    }

    async clickTimeSheetDropdown() {
        await this.timeSheetDropdown.click();
    }

    async openTime() {
        await this.timeMenu.click();
    }

    async clickAttendanceDropdown() {
        await this.attendanceDropdown.click();
    }

    async clickReportsDropdown() {
        await this.reportsDropdown.click();
    }

    async clickProjectInfoDropdown() {
        await this.projectInfoDropdown.click();
    }
}