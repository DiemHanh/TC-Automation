import { test, expect } from '../fixtures';

test('TC25: JavaScript Alert - Accept alert', async ({ javaScriptAlertsPage }) => {
  await test.step('1. Open the JavaScript alerts page', async () => {
    await javaScriptAlertsPage.open();
  });

  await test.step('2. Click "Click for JS Alert" button and accept the alert', async () => {
    await javaScriptAlertsPage.clickJsAlertAndAccept();
  });

  await test.step('3. Verify alert message is "I am a JS Alert"', async () => {
    expect(javaScriptAlertsPage.dialogMessage).toBe('I am a JS Alert');
  });

  await test.step('4. Verify result text "You successfully clicked an alert" is visible', async () => {
    await expect(javaScriptAlertsPage.result).toHaveText('You successfully clicked an alert');
  });
});
