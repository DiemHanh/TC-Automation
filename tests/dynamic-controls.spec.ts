import { test, expect } from '../fixtures';

test('TC13: Dynamic Controls - Remove and add checkbox', async ({ dynamicControlsPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/dynamic_controls', async () => {
    await dynamicControlsPage.open();
  });

  await test.step('3. Click on "Remove" button', async () => {
    await dynamicControlsPage.clickRemove();
  });

  await test.step('4. Verify checkbox disappears with message "It\'s gone!"', async () => {
    await expect(dynamicControlsPage.message).toHaveText("It's gone!");
    await expect(dynamicControlsPage.checkbox).toBeHidden();
  });

  await test.step('5. Click on "Add" button', async () => {
    await dynamicControlsPage.clickAdd();
  });

  await test.step('6. Verify checkbox appears with message "It\'s back!"', async () => {
    await expect(dynamicControlsPage.message).toHaveText("It's back!");
    await expect(dynamicControlsPage.checkbox).toBeVisible();
  });
});
