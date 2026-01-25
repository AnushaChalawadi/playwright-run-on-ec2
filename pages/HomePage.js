class homePage {
    constructor(page) {
        this.page = page;
        this.categoriesLink = {
            Phones: page.getByRole('link', { name: 'Phones' }),
            Laptops: page.getByRole('link', { name: 'Laptops' }),
            Monitors: page.getByRole('link', { name: 'Monitors' })
        }
        this.productItems = '#tbodyid .card-title a';
    }
    async selectCategory(categoryName) {
        const category = this.categoriesLink[categoryName];

        if (!category) {
            throw new Error(`Category ${categoryName} does not exist`);
        }
        await category.click();
        await this.page.locator(this.productItems).first().waitFor();
        await this.page.waitForTimeout(1000);
        const productLocators = await this.page.locator(this.productItems).all();
        const visibleProducts = [];
        for (const locator of productLocators) {
            if (await locator.isVisible()) {
                visibleProducts.push(await locator.textContent());
            }
        }
        console.log(`Visible products under ${categoryName}:`, visibleProducts);
        return visibleProducts;
    }

}
module.exports = homePage;