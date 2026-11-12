import { test, expect } from '../fixtures';
import { users, messages } from '../test-data/testData';

test('TC01: Form Authentication - Login successful with valid credentials', async ({ page, loginPage, secureAreaPage }) => {
  await test.step('1. Open the login page', async () => {
    await loginPage.open();
  });

  await test.step('2. Enter valid username "tomsmith"', async () => {
    await loginPage.fillUsername(users.valid.username);
  });

  await test.step('3. Enter valid password "SuperSecretPassword!"', async () => {
    await loginPage.fillPassword(users.valid.password);
  });

  await test.step('4. Click the Login button', async () => {
    await loginPage.clickLogin();
  });

  await test.step('5. Verify the Secure Area page shows "You logged into a secure area!"', async () => {
    await expect(page).toHaveURL('/secure');
    await expect(secureAreaPage.heading).toBeVisible();
    await expect(secureAreaPage.flashMessage).toContainText(messages.loginSuccess);
  });
});
