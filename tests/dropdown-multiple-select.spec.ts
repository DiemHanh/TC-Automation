import { test, expect } from '../fixtures';

test('TC05: Dropdown - Select multiple options', async ({ multipleSelectPage }) => {
  test.fixme(true, 'jsbin is blocked by Cloudflare captcha');

  await test.step('2. Navigate to https://output.jsbin.com/osebed/2', async () => {
    await multipleSelectPage.open();
  });

  await test.step('3. Select "apple" and "banana" from #fruits', async () => {
    await multipleSelectPage.selectOptions(['apple', 'banana']);
  });

  await test.step('4. Verify both "Apple" and "Banana" are selected', async () => {
    await expect(multipleSelectPage.selectedOptions).toHaveText(['Apple', 'Banana']);
  });
});
