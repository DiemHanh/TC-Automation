import { test, expect } from '../fixtures';

test('TC11: Right click - Context menu', async ({ contextMenuPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/context_menu', async () => {
    await contextMenuPage.open();
  });

  await test.step('3. Right click on #hot-spot and dismiss the alert', async () => {
    await contextMenuPage.rightClickHotSpotAndDismiss();
  });

  await test.step('4. Verify alert message "You selected a context menu"', async () => {
    expect(contextMenuPage.alertMessage).toBe('You selected a context menu');
  });
});
