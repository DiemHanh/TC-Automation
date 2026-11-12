import { test, expect } from '../fixtures';

test('TC05: Dropdown - Select multiple options', async ({ multipleSelectPage }) => {
  test.fixme(true, 'jsbin is blocked by Cloudflare captcha');

  await test.step('1. Open the multiple select page', async () => {
    await multipleSelectPage.open();
  });

  await test.step('2. Select "apple" and "banana" in the fruits list', async () => {
    await multipleSelectPage.selectOptions(['apple', 'banana']);
  });

  await test.step('3. Verify "Apple" and "Banana" are selected', async () => {
    await expect(multipleSelectPage.selectedOptions).toHaveText(['Apple', 'Banana']);
  });
});
