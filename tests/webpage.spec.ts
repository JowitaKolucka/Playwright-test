import { CartPage } from '../src/pages/cart.page';
import { HomePage } from '../src/pages/home.page';
import { ProductsPage } from '../src/pages/products.page';
import { expect, test } from '@playwright/test';

test.describe('Verify service main pages', () => {
  test('home page title', async ({ page }) => {
    // Arrange
    const homePage = new HomePage(page);
    // Act
    await homePage.goto();
    // Assert
    const title = await homePage.title();
    expect(title).toContain('Automation Exercise');
  });

  test('products page title', async ({ page }) => {
    // Arrange
    const productsPage = new ProductsPage(page);
    // Act
    await productsPage.goto();
    // Assert
    const title = await productsPage.title();
    expect(title).toContain('Automation Exercise - All Products');
  });

  test('view cart page title', async ({ page }) => {
    // Arrange
    const cartPage = new CartPage(page);
    // Act
    await cartPage.goto();
    // Assert
    const title = await cartPage.title();
    expect(title).toContain('Automation Exercise - Checkout');
  });
});
