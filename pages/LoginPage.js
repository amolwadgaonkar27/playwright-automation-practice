const loginLocators = require('../locators/loginLocators');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator(loginLocators.usernameInput);
        this.passwordInput = page.locator(loginLocators.passwordInput);
        this.loginButton = page.locator(loginLocators.loginButton);
        this.invalidCredentials = page.locator(loginLocators.invalidCredentials);
        this.forgotPassword = page.locator(loginLocators.forgotPassword);
    }

    async goto() {
        await this.page.goto('');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getInvalidCredentialsMessage() {
        return await this.invalidCredentials.textContent();
    }

    async clickForgotPassword() {
        await this.forgotPassword.click();
    }
}

module.exports = LoginPage;
