//Inheritance and reusability base class
class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigateTo(url) {
        await this.page.goto(url);
    }
    async takeScreenshot(screenshotPath) {
        await this.page.screenshot({ path: screenshotPath, fullPage: true });
    }
    async getText(locator) {
        return await locator.textContent();
    }
    async clickLoginModal() {
        await this.page.getByRole('link', { name: 'Log in' }).click();
    }
    async logintoApplication(username, password) {
        await this.clickLoginModal();
        await this.page.waitForSelector('#logInModal', { state: 'visible' });
        await this.page.locator('#loginusername').fill(username);
        await this.page.locator('#loginpassword').fill(password);
        await this.page.locator('#logInModal .btn-primary').click();
        await this.page.waitForTimeout(2000);
    }
}
module.exports = BasePage;