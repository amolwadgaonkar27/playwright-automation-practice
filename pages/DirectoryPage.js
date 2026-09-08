const directoryLocators = require('../locators/directoryLocators');

class DirectoryPage {
    constructor(page) {
        this.page = page;
        this.employeeNameInput = page.locator(directoryLocators.employeeNameInput);
        this.searchButton = page.locator(directoryLocators.searchButton);
        this.resetButton = page.locator(directoryLocators.resetButton);
        this.directoryCards = page.locator(directoryLocators.directoryCards);
        this.directoryHeader = page.locator(directoryLocators.directoryHeader);
        this.directoryOption = page.getByRole('link', { name: 'Directory' });
        this.helpOption = page.getByTitle('Help');
    }

    async clickHelpOption() {
        await this.helpOption.click();
    }

    async clickDirectoryOption() {
        await this.directoryOption.click();
    }

    async searchEmployee(employeeName) {
        await this.employeeNameInput.fill(employeeName);
        await this.searchButton.click();
    }

    async getEmployeeCardCount() {
        return await this.directoryCards.count();
    }

    async isDirectoryPageVisible() {
        return await this.directoryHeader.isVisible();
    }
}

module.exports = DirectoryPage;
