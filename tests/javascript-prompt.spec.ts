import { test, expect } from '../fixtures';

test('TC12: JavaScript Alerts - Enter text in JS Prompt', async ({ javaScriptAlertsPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/javascript_alerts', async () => {
    await javaScriptAlertsPage.open();
  });

  await test.step('3. Click on "Click for JS Prompt", enter "hello" and click OK', async () => {
    await javaScriptAlertsPage.clickJsPromptAndEnterText('hello');
  });

  await test.step('4. Verify prompt message is "I am a JS prompt"', async () => {
    expect(javaScriptAlertsPage.dialogMessage).toBe('I am a JS prompt');
  });

  await test.step('5. Verify result "You entered: hello" appears', async () => {
    await expect(javaScriptAlertsPage.result).toHaveText('You entered: hello');
  });
});
