class AddToCartPage {
    constructor(page) {
        this.page = page;
        this.productCards = page.locator('.card');
        this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
        this.cartModal = page.locator('#cartur');
        this.productCards = page.locator('#tbodyid .success');
    }

    async addProductToCart(productName) {
        const productLinks = this.page.locator('#tbodyid .card-title a');
        const count = await productLinks.count();
        for (let i = 0; i < count; i++) {
            const title = await productLinks.nth(i).textContent();
            if (title.trim() === productName) {
                await productLinks.nth(i).click();
                return;
            }
        }
        throw new Error(`Product ${productName} not found`);
    }

    async clickAddToCart() {
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
        await this.page.waitForTimeout(2000);
        await this.page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });
    }
    async goToCart() {
        await this.cartModal.click();
        await this.page.waitForTimeout(2000);
    }
    async verifyProductInCart(productName) {
        const productLocators = await this.productCards.all();
        for (const card of productLocators) {
            const title = await card.locator('td:nth-child(2)').textContent();
            if (title.trim() === productName) {
                return true;
            }
        }
        return false;
    }


}
module.exports = AddToCartPage;