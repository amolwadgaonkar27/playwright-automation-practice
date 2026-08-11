const leaveLocators = require('../locators/leaveLocators');

class LeavePage {
    constructor(page) {
        this.page = page;
        this.leaveHeader = page.locator(leaveLocators.leaveHeader);
        this.leaveList = page.locator(leaveLocators.leaveList);
        this.applyLeave = page.locator(leaveLocators.applyLeave);
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
}

module.exports = LeavePage;
