import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginLocator } from '../locators/loginLocator';

test('Invalid Username', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();
  await loginPage.login('invalid_user', 'secret_sauce');

  await expect(page.locator(LoginLocator.errorMessage))
    .toContainText('Username and password do not match');

  await page.screenshot({
    path: 'screenshots/invalid-username.png',
    fullPage: true
  });
});

test('Wrong Password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();
  await loginPage.login('standard_user', 'wrong_password');

  await expect(page.locator(LoginLocator.errorMessage))
    .toContainText('Username and password do not match');

  await page.screenshot({
    path: 'screenshots/wrong-password.png',
    fullPage: true
  });
});

test('Locked Out User', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openWebsite();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(page.locator(LoginLocator.errorMessage))
    .toContainText('Sorry, this user has been locked out.');

  await page.screenshot({
    path: 'screenshots/locked-out-user.png',
    fullPage: true
  });
});