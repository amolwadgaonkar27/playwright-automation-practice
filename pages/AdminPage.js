const navigationLocators = require('../locators/navigationLocators');
const dropDownLocators = require('../locators/dropdownLocators');

exports.AdminPage = class AdminPage {
    constructor(page) {
        this.page = page;
        this.adminHeader = page.locator(navigationLocators.adminHeader);
        this.nationalitiesButton = page.locator(navigationLocators.nationalitiesButton);
        this.corporateBrandingButton = page.locator(navigationLocators.corporateBrandingButton);
        this.userManagementDropdown = page.locator(dropDownLocators.userManagementDropdown);
        this.jobDropdown = page.locator(dropDownLocators.jobDropdown);
        this.organizationDropdown = page.locator(dropDownLocators.organizationDropdown);
        this.qualificationsDropdown = page.locator(dropDownLocators.qualificationsDropdown);
        this.configurationDropdown = page.locator(dropDownLocators.configurationDropdown);
        this.adminOption = page.getByRole('link', { name: 'Admin' });
        this.userManagementOption = page.getByRole('listitem').filter({ hasText: 'User Management' });
        this.usersOption = page.getByRole('listitem').filter({ hasText: /^Users$/ });
        this.jobOption = page.getByRole('listitem').filter({ hasText: 'Job' });
        this.jobTitlesOption = page.getByRole('menuitem', { name: 'Job Titles' });
        this.payGradesOption = page.getByRole('listitem').filter({ hasText: /^Pay Grades$/ });
        this.employmentStatusOption = page.getByRole('listitem').filter({ hasText: /^Employment Status$/ });
        this.jobCategoriesOption = page.getByRole('listitem').filter({ hasText: /^Job Categories$/ });
        this.workShiftsOption = page.getByRole('listitem').filter({ hasText: /^Work Shifts$/ });
        this.organizationOption = page.getByRole('listitem').filter({ hasText: 'Organization' });
        this.generalInformationOption = page.getByRole('listitem').filter({ hasText: /^General Information$/ });
        this.generalInformationHeader = page.getByRole('heading', { name: 'General Information' });
        this.locationsOption = page.getByRole('listitem').filter({ hasText: /^Locations$/ });
        this.locationsHeader = page.getByRole('heading', { name: 'Locations' });
        this.structureOption = page.getByRole('listitem').filter({ hasText: /^Structure$/ });
        this.structureHeader = page.getByRole('heading', { name: 'Organization Structure' });
        this.qualificationsOption = page.getByRole('listitem').filter({ hasText: 'Qualifications' });
        this.skillsOption = page.getByRole('listitem').filter({ hasText: /^Skills$/ });
        this.skillsHeader = page.getByRole('heading', { name: 'Skills' });
    }

    async clickAdminOption() {
        await this.adminOption.click();
    }

    async clickUserManagementOption() {
        await this.userManagementOption.click();
    }

    async clickUsersOption() {
        await this.usersOption.click();
    }

    async clickJobOption() {
        await this.jobOption.click();
    }

    async clickPayGradesOption() {
        await this.payGradesOption.click();
    }

    async clickEmploymentStatusOption() {
        await this.employmentStatusOption.click();
    }

    async clickJobCategoriesOption() {
        await this.jobCategoriesOption.click();
    }

    async clickJobTitlesOption() {
        await this.jobTitlesOption.click();
    }

    async clickWorkShiftsOption() {
        await this.workShiftsOption.click();
    }

    async clickOrganizationOption() {
        await this.organizationOption.click();
    }

    async clickGeneralInformationOption() {
        await this.generalInformationOption.click();
    }

    async isGeneralInformationHeaderVisible() {
        return await this.generalInformationHeader.isVisible();
    }

    async clickLocationsOption() {
        await this.locationsOption.click();
    }

    async isLocationsHeaderVisible() {
        return await this.locationsHeader.isVisible();
    }

    async clickStructureOption(){
        await this.structureOption.click();
    }

    async isStructureHeaderVisible(){
        return await this.structureHeader.isVisible();
    }

    async clickQualificationsOption(){
        await this.qualificationsOption.click();
    }

    async clickSkillsOption(){
        await this.skillsOption.click();
    }

    async isSkillsHeaderVisible(){
        return await this.skillsHeader.isVisible();
    }

    async isAdminPageVisible() {
        return await this.adminHeader.isVisible();
    }

    async clickNationalities() {
        await this.nationalitiesButton.click();
    }

    async clickCorporateBranding() {
        await this.corporateBrandingButton.click();
    }

    async clickUserManagementDropdown() {
        await this.userManagementDropdown.click();
    }

    async clickJobDropdown() {
        await this.jobDropdown.click();
    }

    async clickOrganizationDropdown() {
        await this.organizationDropdown.click();
    }

    async clickQualificationsDropdown() {
        await this.qualificationsDropdown.click();
    }

    async clickConfigurationDropdown() {
        await this.configurationDropdown.click();
    }
}

