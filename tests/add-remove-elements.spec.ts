import { test, expect } from '../fixtures';

test('TC08: Add/Remove Elements - Add and delete elements', async ({ addRemoveElementsPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/add_remove_elements/', async () => {
    await addRemoveElementsPage.open();
  });

  await test.step('3. Click on "Add Element" 3 times', async () => {
    await addRemoveElementsPage.clickAddElement();
    await addRemoveElementsPage.clickAddElement();
    await addRemoveElementsPage.clickAddElement();
  });

  await test.step('4. Verify 3 "Delete" buttons appear', async () => {
    await expect(addRemoveElementsPage.deleteButtons).toHaveCount(3);
  });

  await test.step('5. Click on the first "Delete" button', async () => {
    await addRemoveElementsPage.clickFirstDelete();
  });

  await test.step('6. Verify 2 "Delete" buttons remain', async () => {
    await expect(addRemoveElementsPage.deleteButtons).toHaveCount(2);
  });
});
