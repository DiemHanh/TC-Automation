import { test, expect } from '../fixtures';

test('TC03: Checkboxes - Check to a box', async ({ checkboxesPage }) => {
  await test.step('1. Open the checkboxes page', async () => {
    await checkboxesPage.open();
  });

  await test.step('2. Check checkbox 1', async () => {
    await checkboxesPage.check(1);
  });

  await test.step('3. Verify checkbox 1 is checked', async () => {
    await expect(checkboxesPage.checkbox(1)).toBeChecked();
  });

  await test.step('4. Check checkbox 2', async () => {
    await checkboxesPage.check(2);
  });

  await test.step('5. Verify checkbox 2 is checked', async () => {
    await expect(checkboxesPage.checkbox(2)).toBeChecked();
  });
});
