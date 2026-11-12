import { test, expect } from '../fixtures';

test('TC04: Dropdown - Select single option', async ({ dropdownPage }) => {
  await test.step('1. Open the dropdown page', async () => {
    await dropdownPage.open();
  });

  await test.step('2. Select "Option 1" in the dropdown', async () => {
    await dropdownPage.selectOption('Option 1');
  });

  await test.step('3. Verify "Option 1" is selected', async () => {
    await expect(dropdownPage.selectedOption).toHaveText('Option 1');
  });
});
