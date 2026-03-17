import { HomePage } from '../../src/pages/home.page';
import { LoginPage } from '../../src/pages/login.page';
import { loginData } from '../../test-data/login.data';
import { expect, test } from '@playwright/test';

test.describe('User login to Automation Exercise Page', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    loginPage = new LoginPage(page);
  });

  test('successful login with correct credentials', async ({ page }) => {
    // Arrange
    const userId = loginData.userId;
    const userPassword = loginData.userPassword;
    const expectedUserName = 'Jon Snow';

    // Act
    await loginPage.login(userId, userPassword);

  });

  test('unsuccessful login without e-mail', async () => {
    // Arrange
    const incorrectUserId = 'test';
    const expectedErrorMessage = 'Your email or password is incorrect!';

    // Act
    await loginPage.loginWithoutPassword(incorrectUserId);

    // Assert
    await expect(loginPage.getLoginError()).toHaveText(expectedErrorMessage);
  });
});