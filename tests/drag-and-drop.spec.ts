import { test, expect } from '../fixtures';

test('TC09: Drag & Drop columns', async ({ dragAndDropPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/drag_and_drop', async () => {
    await dragAndDropPage.open();
  });

  await test.step('3. Drag #column-a onto #column-b', async () => {
    await dragAndDropPage.dragAToB();
  });

  await test.step('4. Verify #column-a now shows text "B"', async () => {
    await expect(dragAndDropPage.columnA).toHaveText('B');
  });
});
