import { test, expect } from '../fixtures';

test('TC10: JavaScript Alerts - Accept JS Alert', async ({ javaScriptAlertsPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/javascript_alerts', async () => {
    await javaScriptAlertsPage.open();
  });

  await test.step('3. Click on "Click for JS Alert" and click OK', async () => {
    await javaScriptAlertsPage.clickJsAlertAndAccept();
  });

  await test.step('4. Verify alert message is "I am a JS Alert"', async () => {
    expect(javaScriptAlertsPage.dialogMessage).toBe('I am a JS Alert');
  });

  await test.step('5. Verify result "You successfully clicked an alert" appears', async () => {
    await expect(javaScriptAlertsPage.result).toHaveText('You successfully clicked an alert');
  });
});
