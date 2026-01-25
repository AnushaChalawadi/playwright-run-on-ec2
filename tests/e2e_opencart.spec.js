const { test } = require('../fixtures/fixtures');
const { expect } = require('@playwright/test');
const credentials = require('../config/data/credentials');
const Data = require('../config/data/testData');
const URL = require('../config/data/urlList');

const HomePage = require('../pages/HomePage');
const AddToCartPage = require('../pages/AddToCartPage');
const PlaceOrderPage = require('../pages/PlaceOrderPage');

let homePage;
let addToCartPage;
let placeOrderPage;
test.describe('E2E testcases for OpenCart Application', () => {
        test.beforeEach(async ({ page, login }) => {
                homePage = new HomePage(page);
                addToCartPage = new AddToCartPage(page);
                placeOrderPage = new PlaceOrderPage(page);
                await login.navigateTo(URL.homePage);
                await login.logintoApplication(credentials.username, credentials.password);
                await page.screenshot({ path: '../screenshots/login.png', fullPage: true });
        });
        test('Select category in home page and verify products', async ({ page }) => {

                await expect(page.getByText(credentials.username)).toBeVisible();
                await homePage.selectCategory(Data.category.Phones);
                expect(page.url()).toContain(URL.categorySelect);

        });
        test('Add product to cart and verify the product in cart page', async ({ page }) => {
                await expect(page.getByText(credentials.username)).toBeVisible();
                await homePage.selectCategory(Data.category.Laptops);
                await addToCartPage.addProductToCart(Data.products.MacBookAir);
                await addToCartPage.clickAddToCart();
                await addToCartPage.goToCart();
                const isProductInCart = await addToCartPage.verifyProductInCart(Data.products.MacBookAir);
                expect(isProductInCart).toBeTruthy();
        });
        test('Place and purchase order successfully', async ({ page }) => {
                await addToCartPage.goToCart();
                expect(page.url()).toContain(URL.cartPage);
                await placeOrderPage.placeOrder();
                await placeOrderPage.purchaseOrder();
                const isOrderConfirmed = await placeOrderPage.verifyOrderConfirmation();
                expect(isOrderConfirmed).toBeTruthy();
        });

});