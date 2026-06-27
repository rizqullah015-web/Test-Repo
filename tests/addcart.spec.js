import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { InventoryLocator } from '../locators/inventoryLocator';

test('Add Product To Cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.openWebsite();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addProductToCart();

  await expect(page.locator(InventoryLocator.cartBadge)).toHaveText('1');

  await page.screenshot({
    path: 'screenshots/add-cart-success.png',
    fullPage: true
  });
});