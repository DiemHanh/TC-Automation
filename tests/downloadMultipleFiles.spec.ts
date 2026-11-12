import fs from 'fs';
import path from 'path';
import { test, expect } from '../fixtures';
import { downloadFolder, docFile, uploadFile } from '../test-data/testData';

const fileNames = ['doc.txt', 'bb.txt'];

test.beforeEach(async ({ uploadPage }) => {
  for (const file of [docFile, uploadFile]) {
    await uploadPage.open();
    await uploadPage.attachFile(file);
    await uploadPage.clickUpload();
  }

  for (const fileName of fileNames) {
    const savePath = path.join(downloadFolder, fileName);
    if (fs.existsSync(savePath)) {
      fs.unlinkSync(savePath);
    }
  }
});

test('TC13: Download multiple files', async ({ downloadPage }) => {
  let stepNumber = 1;

  await test.step(`${stepNumber++}. Open the download page`, async () => {
    await downloadPage.open();
  });

  for (const fileName of fileNames) {
    const savePath = path.join(downloadFolder, fileName);

    await test.step(`${stepNumber++}. Download "${fileName}" to the download folder`, async () => {
      await downloadPage.downloadFile(fileName, savePath);
    });

    await test.step(`${stepNumber++}. Verify "${fileName}" is saved on local disk`, async () => {
      expect(fs.existsSync(savePath)).toBe(true);
    });
  }
});
