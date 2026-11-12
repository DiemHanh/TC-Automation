import { test, expect } from '../fixtures';

test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {
  await test.step('1. Open the context menu page', async () => {
    await contextMenuPage.open();
  });

  await test.step('2. Right click on the box and dismiss the alert', async () => {
    await contextMenuPage.rightClickHotSpotAndDismiss();
  });

  await test.step('3. Verify the alert message is "You selected a context menu"', async () => {
    expect(contextMenuPage.alertMessage).toBe('You selected a context menu');
  });
});
