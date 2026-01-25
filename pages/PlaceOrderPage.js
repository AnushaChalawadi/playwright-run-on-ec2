const { billingDetails } = require('../config/data/billingDetails');
class PlaceOrderPage {
    constructor(page) {
        this.page = page;
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
        this.placeOrderModal = page.getByRole('heading', { name: 'Place order' });
        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.creditCardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.orderConfirmationModal = page.getByRole('heading', { name: 'Thank you for your purchase!' });

    }

    async placeOrder() {
        await this.placeOrderButton.click();
        await this.page.waitForTimeout(1000);
        await this.placeOrderModal.waitFor();
    }
    async purchaseOrder() {
        await this.nameInput.fill(billingDetails.Name);
        await this.countryInput.fill(billingDetails.Country);
        await this.cityInput.fill(billingDetails.City);
        await this.creditCardInput.fill(billingDetails.Creditcard);
        await this.monthInput.fill(billingDetails.Month);
        await this.yearInput.fill(billingDetails.Year);
        await this.purchaseButton.click();
        await this.page.waitForTimeout(1000);
    }
    async verifyOrderConfirmation() {
        return await this.orderConfirmationModal.isVisible();
    }

} module.exports = PlaceOrderPage;
