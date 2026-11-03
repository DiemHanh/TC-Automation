import { test, expect } from '../fixtures';

test('TC10: Horizontal Slider - Set value to 3.5', async ({ horizontalSliderPage }) => {
  let value = '';

  await test.step('2. Navigate to https://the-internet.herokuapp.com/horizontal_slider', async () => {
    await horizontalSliderPage.open();
  });

  await test.step('3. Read current slider value from #range', async () => {
    value = await horizontalSliderPage.getValue();
  });

  await test.step('4. Press ArrowRight repeatedly until value reaches 3.5', async () => {
    let count = 0;
    while (value !== '3.5' && count < 10) {
      await horizontalSliderPage.pressArrowRight();
      value = await horizontalSliderPage.getValue();
      count++;
    }
  });

  await test.step('5. Verify slider value equals 3.5', async () => {
    await expect(horizontalSliderPage.rangeValue).toHaveText('3.5');
  });
});
