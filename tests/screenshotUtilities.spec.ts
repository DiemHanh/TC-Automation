import fs from 'fs';
import path from 'path';
import { test, expect } from '../fixtures';
import { screenshotFolder } from '../test-data/testData';

test.describe.configure({ mode: 'serial' });

test.beforeAll(async () => {
  fs.rmSync(screenshotFolder, { recursive: true, force: true });
  fs.mkdirSync(screenshotFolder, { recursive: true });
});

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status === 'failed') {
    const fileName = 'failure-' + testInfo.title.replaceAll(':', '').replaceAll(' ', '-') + '.png';
    await page.screenshot({ path: path.join(screenshotFolder, fileName) });
  }
});

test('TC23: Screenshot utilities - Full page and element screenshot', async ({ page, homePage }) => {
  const screenshotPath = path.join(screenshotFolder, 'screenshot.png');
  const elementPath = path.join(screenshotFolder, 'element.png');

  await test.step('1. Open the home page', async () => {
    await homePage.open();
  });

  await test.step('2. Take a full-page screenshot and save as screenshot.png', async () => {
    await homePage.takeFullPageScreenshot(screenshotPath);
  });

  await test.step('3. Verify screenshot.png exists and includes content below the fold', async () => {
    expect(fs.existsSync(screenshotPath)).toBe(true);
    const pageHeight = await page.evaluate(() => document.body.scrollHeight);
    expect(pageHeight).toBeGreaterThan(1080);
  });

  await test.step('4. Take a screenshot of the h1 and save as element.png', async () => {
    await homePage.takeHeadingScreenshot(elementPath);
  });

  await test.step('5. Verify element.png exists and is smaller than screenshot.png', async () => {
    expect(fs.existsSync(elementPath)).toBe(true);
    const elementSize = fs.statSync(elementPath).size;
    const fullPageSize = fs.statSync(screenshotPath).size;
    expect(elementSize).toBeLessThan(fullPageSize);
  });
});

test('TC23: Screenshot utilities - Fail on purpose', async ({ homePage }) => {
  test.fail();

  await test.step('1. Open the home page', async () => {
    await homePage.open();
  });

  await test.step('2. Verify the heading is "Wrong heading" (fail on purpose)', async () => {
    await expect(homePage.heading).toHaveText('Wrong heading', { timeout: 2000 });
  });
});

test('TC23: Screenshot utilities - Verify failure screenshot', async () => {
  await test.step('1. Verify the failure screenshot file is created', async () => {
    const failurePath = path.join(screenshotFolder, 'failure-TC23-Screenshot-utilities---Fail-on-purpose.png');
    expect(fs.existsSync(failurePath)).toBe(true);
  });
});
