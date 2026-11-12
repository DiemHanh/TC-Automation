import { test, expect } from '../fixtures';
import { users, messages } from '../test-data/testData';

test('TC02: Form Authentication - Login fail with invalid credentials', async ({ page, loginPage }) => {
  await test.step('1. Open the login page', async () => {
    await loginPage.open();
  });

  await test.step('2. Enter invalid username "toms"', async () => {
    await loginPage.fillUsername(users.invalid.username);
  });

  await test.step('3. Enter password "SuperSecretPassword!"', async () => {
    await loginPage.fillPassword(users.invalid.password);
  });

  await test.step('4. Click the Login button', async () => {
    await loginPage.clickLogin();
  });

  await test.step('5. Verify error message "Your username is invalid!" is shown', async () => {
    await expect(page).toHaveURL('/login');
    await expect(loginPage.flashMessage).toContainText(messages.invalidUsername);
  });
});
