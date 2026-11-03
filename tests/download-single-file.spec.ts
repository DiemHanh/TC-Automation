import fs from 'fs';
import path from 'path';
import { test, expect } from '../fixtures';
import { downloadFolder, jpegFile } from '../test-data/testData';

test('TC12: Download a single file', async ({ uploadPage, downloadPage }) => {
  const fileName = 'Jpeg_with_exif.jpeg';
  const savePath = path.join(downloadFolder, fileName);

  await test.step('Precondition: Upload Jpeg_with_exif.jpeg so it is shown on download page', async () => {
    await uploadPage.open();
    await uploadPage.attachFile(jpegFile);
    await uploadPage.clickUpload();
    if (fs.existsSync(savePath)) {
      fs.unlinkSync(savePath);
    }
  });

  await test.step('2. Navigate to https://the-internet.herokuapp.com/download', async () => {
    await downloadPage.open();
  });

  await test.step('3. Click on link "Jpeg_with_exif.jpeg" and 4. save to download/Jpeg_with_exif.jpeg', async () => {
    await downloadPage.downloadFile(fileName, savePath);
  });

  await test.step('5. Verify file exists on local disk', async () => {
    expect(fs.existsSync(savePath)).toBe(true);
  });
});
