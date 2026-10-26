import { test, expect } from '../fixtures/pages.fixture';
import { users, messages } from '../test-data/testData';

test('TC02: Form Authentication - Login fail with invalid credentials', async ({ page, loginPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/login', async () => {
    await loginPage.open();
  });

  await test.step('3. Fill in username with toms (invalid)', async () => {
    await loginPage.fillUsername(users.invalid.username);
  });

  await test.step('4. Fill in password with SuperSecretPassword!', async () => {
    await loginPage.fillPassword(users.invalid.password);
  });

  await test.step('5. Click on Login button', async () => {
    await loginPage.clickLogin();
  });

  await test.step('6. Verify error flash message appears', async () => {
    await expect(page).toHaveURL('/login');
    await expect(loginPage.flashMessage).toContainText(messages.invalidUsername);
  });
});
