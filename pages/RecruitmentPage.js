const navigationLocators = require('../locators/navigationLocators');

class RecruitmentPage {
    constructor(page) {
        this.page = page;
        this.recruitmentHeader = page.locator(navigationLocators.recruitmentHeader);
    }

    async isRecruitmentPageVisible() {
        return await this.recruitmentHeader.isVisible();
    }
}

module.exports = RecruitmentPage;