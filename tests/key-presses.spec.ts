import { test, expect } from '../fixtures';

test('TC15: Key Presses - Press keys in input', async ({ keyPressesPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/key_presses', async () => {
    await keyPressesPage.open();
  });

  await test.step('3. Press "Escape" key in the input', async () => {
    await keyPressesPage.pressKey('Escape');
  });

  await test.step('4. Verify result "You entered: ESCAPE" appears', async () => {
    await expect(keyPressesPage.result).toHaveText('You entered: ESCAPE');
  });

  await test.step('5. Press "A" key in the input', async () => {
    await keyPressesPage.pressKey('A');
  });

  await test.step('6. Verify result "You entered: A" appears', async () => {
    await expect(keyPressesPage.result).toHaveText('You entered: A');
  });
});
