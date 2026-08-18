const pimLocators = require('../locators/pimLocators');

class PimPage {
    constructor(page) {
        this.page = page;
        this.employeeNameInput = page.locator(pimLocators.employeeNameInput);
        this.searchButton = page.locator(pimLocators.searchButton);
        this.resetButton = page.locator(pimLocators.resetButton);
        this.employeeRows = page.locator(pimLocators.employeeRows);
        this.employeeTable = page.locator(pimLocators.employeeTable);
        this.employeeListButton = page.locator(pimLocators.employeeListButton);
        this.addEmployeeButton = page.locator(pimLocators.addEmployeeButton);
        this.reportsButton = page.locator(pimLocators.reportsButton);
    }

    async searchEmployee(employeeName) {
        await this.employeeNameInput.fill(employeeName);
        await this.searchButton.click();
        await this.employeeTable.waitFor({ state: 'visible' });
    }

    async getEmployeeCount() {
        return await this.employeeRows.count();
    }

    async getEmployeeNames() {
        return await this.employeeRows.allTextContents();
    }

    async resetSearch() {
        await this.resetButton.click();
    }

    async clickEmployeeList() {
        await this.employeeListButton.click();
    }

    async clickAddEmployee() {
        await this.addEmployeeButton.click();
    }

    async clickReports() {
        await this.reportsButton.click();
    }
}

module.exports = PimPage;
