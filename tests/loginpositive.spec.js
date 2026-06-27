import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login Success', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();
  await loginPage.login('standard_user', 'secret_sauce');

  // Assertion
  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');

  // Screenshot
  await page.screenshot({
    path: 'screenshots/login-success.png',
    fullPage: true
  });
});