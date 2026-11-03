import { test, expect } from '../fixtures/pages.fixture';

test('TC03: Checkboxes - Check to a box', async ({ checkboxesPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/checkboxes', async () => {
    await checkboxesPage.open();
  });

  await test.step('3. Check on checkbox 1', async () => {
    await checkboxesPage.check(1);
  });

  await test.step('4. Verify checkbox 1 is checked', async () => {
    await expect(checkboxesPage.checkbox(1)).toBeChecked();
  });

  await test.step('5. Check on checkbox 2', async () => {
    await checkboxesPage.check(2);
  });

  await test.step('6. Verify checkbox 2 is checked', async () => {
    await expect(checkboxesPage.checkbox(2)).toBeChecked();
  });
});
