import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { LoginTestData } from '../../src/test-data/LoginTestData';

test.describe('Login validation', () => {
  test('should show error for invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(
      LoginTestData.INVALID_USER.username,
      LoginTestData.INVALID_USER.password
    );
    await loginPage.verifyMessage(
      'Your password is invalid!'
    );
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigateToLogin();
    await loginPage.login(
      LoginTestData.VALID_USER.username,
      LoginTestData.VALID_USER.password
    );

    // Additional verification for successful login can be added here
    await loginPage.verifyMessage(
      'You logged into a secure area!'
    );
    await loginPage.verifyHeader(
      'Secure Area page for Automation Testing Practice'
    );

  });
});