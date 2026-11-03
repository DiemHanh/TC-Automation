import { test, expect } from '../fixtures';

test('TC14: Detect broken images', async ({ brokenImagesPage, request }) => {
  let srcList: (string | null)[] = [];

  await test.step('2. Navigate to https://the-internet.herokuapp.com/broken_images', async () => {
    await brokenImagesPage.open();
  });

  await test.step('3. Get all <img> elements on the page', async () => {
    await expect(brokenImagesPage.images).toHaveCount(3);
  });

  await test.step('4. For each image, read its src attribute', async () => {
    srcList = await brokenImagesPage.getAllImageSrc();
  });

  for (const src of srcList) {
    await test.step(`5. Send GET request to https://the-internet.herokuapp.com/${src} and 6. verify status code 200`, async () => {
      const response = await request.get(`https://the-internet.herokuapp.com/${src}`);
      expect.soft(response.status(), `Image ${src} is broken`).toBe(200);
    });
  }
});
