import { test, expect } from '../fixtures';

test('TC24: Frame - Nested frames', async ({ nestedFramesPage }) => {
  await test.step('1. Open the nested frames page', async () => {
    await nestedFramesPage.open();
  });

  await test.step('2. Verify left frame shows "LEFT"', async () => {
    await expect(nestedFramesPage.leftFrameBody).toHaveText('LEFT');
  });

  await test.step('3. Verify middle frame shows "MIDDLE"', async () => {
    await expect(nestedFramesPage.middleFrameBody).toHaveText('MIDDLE');
  });

  await test.step('4. Verify right frame shows "RIGHT"', async () => {
    await expect(nestedFramesPage.rightFrameBody).toHaveText('RIGHT');
  });

  await test.step('5. Verify bottom frame shows "BOTTOM"', async () => {
    await expect(nestedFramesPage.bottomFrameBody).toHaveText('BOTTOM');
  });
});
