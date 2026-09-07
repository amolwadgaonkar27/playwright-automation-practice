const leaveLocators = require('../locators/leaveLocators');
const dropDownLocators = require('../locators/dropdownLocators');

exports.LeavePage = class LeavePage {
    constructor(page) {
        this.page = page;
        this.leaveHeader = page.locator(leaveLocators.leaveHeader);
        this.leaveList = page.locator(leaveLocators.leaveList);
        this.applyLeave = page.locator(leaveLocators.applyLeave);
        this.reportsDropdown = dropDownLocators.reportsDropdown[page];
        this.leaveMenu = leaveLocators.leaveMenu(page);
        this.configureDropdown = dropDownLocators.configureDropdown(page);
        this.leaveOption = page.getByRole('link', { name: 'Leave' });
        this.helpOption = page.getByTitle('Help');
    }
    async clickHelpOption(){
        await this.helpOption.click();
    }
    async clickLeaveOption(){
        await this.leaveOption.click();
    }

    async isLeavePageVisible() {
        return await this.leaveHeader.isVisible();
    }

    async openLeaveList() {
        await this.leaveList.click();
    }

    async openApplyLeave() {
        await this.applyLeave.click();
    }

    async clickReportsDropdown() {
        await this.reportsDropdown.click();
    }

    async openLeave() {
        await this.leaveMenu.click();
    }

    async clickConfigureDropdown() {
        await this.configureDropdown.click();
    }
}
