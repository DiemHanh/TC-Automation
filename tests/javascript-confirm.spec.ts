import { test, expect } from '../fixtures';

test('TC11: JavaScript Alerts - Dismiss JS Confirm', async ({ javaScriptAlertsPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/javascript_alerts', async () => {
    await javaScriptAlertsPage.open();
  });

  await test.step('3. Click on "Click for JS Confirm" and click Cancel', async () => {
    await javaScriptAlertsPage.clickJsConfirmAndCancel();
  });

  await test.step('4. Verify confirm message is "I am a JS Confirm"', async () => {
    expect(javaScriptAlertsPage.dialogMessage).toBe('I am a JS Confirm');
  });

  await test.step('5. Verify result "You clicked: Cancel" appears', async () => {
    await expect(javaScriptAlertsPage.result).toHaveText('You clicked: Cancel');
  });
});
