import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";
import { CheckoutLocator } from "../locators/checkoutLocator";

test("Checkout Success", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.openWebsite();
  await loginPage.login("standard_user", "secret_sauce");

  // Add Product
  await inventoryPage.addProductToCart();

  // Open Cart
  await checkoutPage.openCart();

  // Checkout
  await checkoutPage.clickCheckout();

  // Fill Data
  await checkoutPage.fillCheckoutInformation(
    "Muhammad",
    "Alif",
    "12345"
  );

  // Finish
  await checkoutPage.finishCheckout();

  // Assertion
  await expect(
    page.locator(CheckoutLocator.completeHeader)
  ).toHaveText("Thank you for your order!");

  // Screenshot
  await page.screenshot({
    path: "screenshots/checkout-success.png",
    fullPage: true,
  });

});