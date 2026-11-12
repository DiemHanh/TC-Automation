import { test, expect } from '../fixtures';
import { uploadFile } from '../test-data/testData';

test('TC07: Upload a file', async ({ uploadPage }) => {
  await test.step('1. Open the upload page', async () => {
    await uploadPage.open();
  });

  await test.step('2. Choose file "bb.txt" to upload', async () => {
    await uploadPage.attachFile(uploadFile);
  });

  await test.step('3. Click the Upload button', async () => {
    await uploadPage.clickUpload();
  });

  await test.step('4. Verify "bb.txt" is in the uploaded files list', async () => {
    await expect(uploadPage.uploadedFiles).toContainText('bb.txt');
  });
});
