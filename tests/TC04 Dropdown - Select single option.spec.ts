import { test, expect } from '../fixtures/pages.fixture';

test('TC04: Dropdown - Select single option', async ({ dropdownPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/dropdown', async () => {
    await dropdownPage.open();
  });

  await test.step('3. Select "Option 1"', async () => {
    await dropdownPage.selectOption('Option 1');
  });

  await test.step('4. Verify "Option 1" is selected', async () => {
    await expect(dropdownPage.selectedOption).toHaveText('Option 1');
  });
});
