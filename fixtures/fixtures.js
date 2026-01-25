const BasePage = require('../pages/basePage');
const { test: base } = require('@playwright/test');

exports.test = base.extend({
    // This fixture automatically creates the LoginPage instance
    login: async ({ page }, use) => {
        const login = new BasePage(page);
        await use(login);
    },
});