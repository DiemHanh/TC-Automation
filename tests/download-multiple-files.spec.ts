import fs from 'fs';
import path from 'path';
import { test, expect } from '../fixtures';
import { downloadFolder, docFile, uploadFile } from '../test-data/testData';

test('TC13: Download multiple files', async ({ uploadPage, downloadPage }) => {
  const fileNames = ['doc.txt', 'bb.txt'];

  await test.step('Precondition: Upload doc.txt and bb.txt so they are shown on download page', async () => {
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

  await test.step('2. Navigate to https://the-internet.herokuapp.com/download', async () => {
    await downloadPage.open();
  });

  for (const fileName of fileNames) {
    const savePath = path.join(downloadFolder, fileName);

    await test.step(`3.1 Click on link "${fileName}" and 3.2 save to download/${fileName}`, async () => {
      await downloadPage.downloadFile(fileName, savePath);
    });

    await test.step(`3.3 Verify ${fileName} exists on local disk`, async () => {
      expect(fs.existsSync(savePath)).toBe(true);
    });
  }
});
