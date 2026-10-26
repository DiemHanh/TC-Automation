import { test, expect } from '../fixtures/pages.fixture';
import { users, messages } from '../test-data/testData';

test('TC01: Form Authentication - Login successful with valid credentials', async ({ page, loginPage, secureAreaPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/login', async () => {
    await loginPage.open();
  });

  await test.step('3. Fill in username with tomsmith', async () => {
    await loginPage.fillUsername(users.valid.username);
  });

  await test.step('4. Fill in password with SuperSecretPassword!', async () => {
    await loginPage.fillPassword(users.valid.password);
  });

  await test.step('5. Click on Login button', async () => {
    await loginPage.clickLogin();
  });

  await test.step('6. Verify home page appears with message "You logged into a secure area!"', async () => {
    await expect(page).toHaveURL('/secure');
    await expect(secureAreaPage.heading).toBeVisible();
    await expect(secureAreaPage.flashMessage).toContainText(messages.loginSuccess);
  });
});
