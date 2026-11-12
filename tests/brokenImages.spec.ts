import { test, expect } from '../fixtures';

test('TC14: Detect broken images', async ({ brokenImagesPage, request }) => {
  let srcList = [];
  let stepNumber = 1;

  await test.step(`${stepNumber++}. Open the broken images page`, async () => {
    await brokenImagesPage.open();
  });

  await test.step(`${stepNumber++}. Verify the page has 3 images`, async () => {
    await expect(brokenImagesPage.images).toHaveCount(3);
  });

  await test.step(`${stepNumber++}. Get the src of all images`, async () => {
    srcList = await brokenImagesPage.getAllImageSrc();
  });

  for (const src of srcList) {
    await test.step(`${stepNumber++}. Verify image "${src}" returns status code 200`, async () => {
      const response = await request.get(`https://the-internet.herokuapp.com/${src}`);
      expect.soft(response.status()).toBe(200);
    });
  }
});
