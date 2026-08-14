const navigationLocators = require('../locators/navigationLocators');

class MaintenancePage {
    constructor(page) {
        this.page = page;
        this.maintenanceHeader = page.locator(navigationLocators.maintenanceHeader);
    }

    async isMaintenancePageVisible() {
        return await this.maintenanceHeader.isVisible();
    }
}

module.exports = MaintenancePage;