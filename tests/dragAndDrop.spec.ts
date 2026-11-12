import { test, expect } from '../fixtures';

test('TC09: Drag & Drop columns', async ({ dragAndDropPage }) => {
  await test.step('1. Open the drag and drop page', async () => {
    await dragAndDropPage.open();
  });

  await test.step('2. Drag column A onto column B', async () => {
    await dragAndDropPage.dragAToB();
  });

  await test.step('3. Verify column A now shows "B"', async () => {
    await expect(dragAndDropPage.columnA).toHaveText('B');
  });
});
