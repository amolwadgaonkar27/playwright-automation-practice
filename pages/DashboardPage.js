const dashboardLocators = require('../locators/dashboardLocators');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.dashboardHeader = page.locator(dashboardLocators.dashboardHeader);
        this.pimMenu = page.locator(dashboardLocators.pimMenu);
        this.leaveMenu = page.locator(dashboardLocators.leaveMenu);
        this.directoryMenu = page.locator(dashboardLocators.directoryMenu);
        this.myInfoMenu = page.locator(dashboardLocators.myInfoMenu);
        this.adminMenu = page.locator(dashboardLocators.adminMenu);
        this.timeMenu = page.locator(dashboardLocators.timeMenu);
        this.recruitmentMenu = page.locator(dashboardLocators.recruitmentMenu);
        this.quicklaunchMenu = page.locator(dashboardLocators.quicklaunchMenu);
        this.assignLeaveButton = page.locator(dashboardLocators.Assignbutton);
        this.leaveListButton = page.locator(dashboardLocators.leaveListButton);
        this.timeSheetButton = page.locator(dashboardLocators.timeSheetButton);
        this.applyLeaveButton = page.locator(dashboardLocators.applyLeaveButton);
        this.myLeaveButton = page.locator(dashboardLocators.myLeaveButton);
        this.myTimesheetButton = page.locator(dashboardLocators.myTimesheetButton);
    }

    async isDashboardVisible() {
        return await this.dashboardHeader.isVisible();
    }

    async openPIM() {
        await this.pimMenu.click();
    }

    async openLeave() {
        await this.leaveMenu.click();
    }

    async openDirectory() {
        await this.directoryMenu.click();
    }

    async openMyInfo() {
        await this.myInfoMenu.click();
    }

    async openAdmin() {
        await this.adminMenu.click();
    }

    async openTime() {
        await this.timeMenu.click();
    }

    async openRecruitment() {
        await this.recruitmentMenu.click();
    }

    async openQuickLaunch() {
        await this.quicklaunchMenu.click();
    }

    async clickAssignLeave() {
        await this.assignLeaveButton.click();
    }

    async clickLeaveList() {
        await this.leaveListButton.click
    }

    async clickTimeSheet() {
        await this.timeSheetButton.click();
    }

    async clickApplyLeave() {
        await this.applyLeaveButton.click();
    }

    async clickMyLeave() {
        await this.myLeaveButton.click();
    }

    async clickMyTimesheet() {
        await this.myTimesheetButton.click();
    }

}

module.exports = DashboardPage;
