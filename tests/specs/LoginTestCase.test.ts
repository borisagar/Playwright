import { test } from "../../src/config/PageSetup";
import { LoginPage } from "../../src/pages/LoginPage";
import { LoginTestData } from "../../src/test-data/LoginTestData";
import { setPageFixture } from "../../src/support/PageFixeture";

test.describe("Login validation", () => {
  test.beforeEach(async ({ page, context, browser }) => {
    setPageFixture({ browser, context, page });
  });

  test("should show error for invalid credentials", async () => {
    const loginPage = new LoginPage();

    await loginPage.navigateToLogin();
    await loginPage.login(
      LoginTestData.INVALID_USER.username,
      LoginTestData.INVALID_USER.password,
    );
    await loginPage.verifyMessage("Your password is invalid!");
  });

  test("should login successfully with valid credentials", async () => {
    const loginPage = new LoginPage();

    await loginPage.navigateToLogin();
    await loginPage.login(
      LoginTestData.VALID_USER.username,
      LoginTestData.VALID_USER.password,
    );

    // Additional verification for successful login can be added here
    await loginPage.verifyMessage("You logged into a secure area!");
    await loginPage.verifyHeader(
      "Secure Area page for Automation Testing Practice",
    );
  });
});
