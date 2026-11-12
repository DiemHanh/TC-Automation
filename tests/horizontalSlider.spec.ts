import { test, expect } from '../fixtures';

test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSliderPage }) => {
  let value = '';

  await test.step('1. Open the horizontal slider page', async () => {
    await horizontalSliderPage.open();
  });

  await test.step('2. Read the current slider value', async () => {
    value = await horizontalSliderPage.getValue();
  });

  await test.step('3. Press ArrowRight until the slider value is 3.5', async () => {
    let count = 0;
    while (value !== '3.5' && count < 10) {
      await horizontalSliderPage.pressArrowRight();
      value = await horizontalSliderPage.getValue();
      count++;
    }
  });

  await test.step('4. Verify the slider value is 3.5', async () => {
    await expect(horizontalSliderPage.rangeValue).toHaveText('3.5');
  });
});
