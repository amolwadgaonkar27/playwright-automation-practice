const navigationLocators = require('../locators/navigationLocators');

class RecruitmentPage {
    constructor(page) {
        this.page = page;
        this.recruitmentHeader = page.locator(navigationLocators.recruitmentHeader);
        this.candidatesButton = page.locator(navigationLocators.candidatesButton);
        this.vacanciesButton = page.locator(navigationLocators.vacanciesButton);
    }

    async isRecruitmentPageVisible() {
        return await this.recruitmentHeader.isVisible();
    }

    async clickCandidatesButton() {
        await this.candidatesButton.click();
    }

    async clickVacanciesButton() {
        await this.vacanciesButton.click();
    }
}

module.exports = RecruitmentPage;