import { test, expect } from '../fixtures';

test('TC06: Hyperlink - Status codes navigation', async ({ page, statusCodesPage }) => {
  await test.step('1. Open the status codes page', async () => {
    await statusCodesPage.open();
  });

  await test.step('2. Click status code "200"', async () => {
    await statusCodesPage.clickStatusCode('200');
  });

  await test.step('3. Verify the 200 status code page is shown', async () => {
    await expect(page).toHaveURL('/status_codes/200');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 200 status code.');
  });

  await test.step('4. Click "here" to go back to the status codes page', async () => {
    await statusCodesPage.clickHere();
  });

  await test.step('5. Click status code "301"', async () => {
    await statusCodesPage.clickStatusCode('301');
  });

  await test.step('6. Verify the 301 status code page is shown', async () => {
    await expect(page).toHaveURL('/status_codes/301');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 301 status code.');
  });

  await test.step('7. Click "here" to go back to the status codes page', async () => {
    await statusCodesPage.clickHere();
  });

  await test.step('8. Click status code "404"', async () => {
    await statusCodesPage.clickStatusCode('404');
  });

  await test.step('9. Verify the 404 status code page is shown', async () => {
    await expect(page).toHaveURL('/status_codes/404');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 404 status code.');
  });

  await test.step('10. Click "here" to go back to the status codes page', async () => {
    await statusCodesPage.clickHere();
  });

  await test.step('11. Click status code "500"', async () => {
    await statusCodesPage.clickStatusCode('500');
  });

  await test.step('12. Verify the 500 status code page is shown', async () => {
    await expect(page).toHaveURL('/status_codes/500');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 500 status code.');
  });

  await test.step('13. Click "here" to go back to the status codes page', async () => {
    await statusCodesPage.clickHere();
    await expect(page).toHaveURL('/status_codes');
  });
});
