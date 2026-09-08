const navigationLocators = require('../locators/navigationLocators');

exports.RecruitmentPage = class RecruitmentPage {
    constructor(page) {
        this.page = page;
        this.recruitmentHeader = page.locator(navigationLocators.recruitmentHeader);
        this.candidatesButton = page.locator(navigationLocators.candidatesButton);
        this.vacanciesButton = page.locator(navigationLocators.vacanciesButton);
        this.recruitmentOption = page.getByRole('link', { name: 'Recruitment' });
        this.helpOption = page.getByTitle('Help');
    }

    async clickHelpOption() {
        await this.helpOption.click();
    }

    async clickRecruitmentOption() {
        await this.recruitmentOption.click();
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