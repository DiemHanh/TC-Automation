import fs from 'fs';
import path from 'path';
import { test, expect } from '../fixtures';
import { downloadFolder, jpegFile } from '../test-data/testData';

const fileName = 'Jpeg_with_exif.jpeg';
const savePath = path.join(downloadFolder, fileName);

test.beforeEach(async ({ uploadPage }) => {
  await uploadPage.open();
  await uploadPage.attachFile(jpegFile);
  await uploadPage.clickUpload();

  if (fs.existsSync(savePath)) {
    fs.unlinkSync(savePath);
  }
});

test('TC12: Download a single file', async ({ downloadPage }) => {
  await test.step('1. Open the download page', async () => {
    await downloadPage.open();
  });

  await test.step('2. Download "Jpeg_with_exif.jpeg" to the download folder', async () => {
    await downloadPage.downloadFile(fileName, savePath);
  });

  await test.step('3. Verify "Jpeg_with_exif.jpeg" is saved on local disk', async () => {
    expect(fs.existsSync(savePath)).toBe(true);
  });
});
