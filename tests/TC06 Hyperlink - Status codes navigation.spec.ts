import { test, expect } from '../fixtures/pages.fixture';

test('TC06: Hyperlink - Status codes navigation', async ({ page, statusCodesPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/status_codes', async () => {
    await statusCodesPage.open();
  });

  await test.step('3. Click on "200"', async () => {
    await statusCodesPage.clickStatusCode('200');
  });

  await test.step('4. Verify "200 status code" page appears', async () => {
    await expect(page).toHaveURL('/status_codes/200');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 200 status code.');
  });

  await test.step('5. Click on "here"', async () => {
    await statusCodesPage.clickHere();
  });

  await test.step('6. Click on "301"', async () => {
    await statusCodesPage.clickStatusCode('301');
  });

  await test.step('7. Verify "301 status code" page appears', async () => {
    await expect(page).toHaveURL('/status_codes/301');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 301 status code.');
  });

  await test.step('8. Click on "here"', async () => {
    await statusCodesPage.clickHere();
  });

  await test.step('9. Click on "404"', async () => {
    await statusCodesPage.clickStatusCode('404');
  });

  await test.step('10. Verify "404 status code" page appears', async () => {
    await expect(page).toHaveURL('/status_codes/404');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 404 status code.');
  });

  await test.step('11. Click on "here"', async () => {
    await statusCodesPage.clickHere();
  });

  await test.step('12. Click on "500"', async () => {
    await statusCodesPage.clickStatusCode('500');
  });

  await test.step('13. Verify "500 status code" page appears', async () => {
    await expect(page).toHaveURL('/status_codes/500');
    await expect(statusCodesPage.pageContent).toContainText('This page returned a 500 status code.');
  });

  await test.step('14. Click on "here"', async () => {
    await statusCodesPage.clickHere();
    await expect(page).toHaveURL('/status_codes');
  });
});
