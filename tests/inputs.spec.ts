import { test, expect } from '../fixtures';

test('TC09: Inputs - Enter a number', async ({ inputsPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/inputs', async () => {
    await inputsPage.open();
  });

  await test.step('3. Fill in the number input with 100', async () => {
    await inputsPage.fillNumber('100');
  });

  await test.step('4. Verify the input value is 100', async () => {
    await expect(inputsPage.numberInput).toHaveValue('100');
  });

  await test.step('5. Press ArrowUp key', async () => {
    await inputsPage.pressKey('ArrowUp');
  });

  await test.step('6. Verify the input value is 101', async () => {
    await expect(inputsPage.numberInput).toHaveValue('101');
  });
});
