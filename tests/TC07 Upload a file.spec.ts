import { test, expect } from '../fixtures/pages.fixture';
import { uploadFile } from '../test-data/testData';

test('TC07: Upload a file', async ({ uploadPage }) => {
  await test.step('2. Navigate to https://the-internet.herokuapp.com/upload', async () => {
    await uploadPage.open();
  });

  await test.step('3. Attach the file download/bb.txt to the file input', async () => {
    await uploadPage.attachFile(uploadFile);
  });

  await test.step('4. Click on Upload button', async () => {
    await uploadPage.clickUpload();
  });

  await test.step('5. Verify uploaded files list contains "bb.txt"', async () => {
    await expect(uploadPage.uploadedFiles).toContainText('bb.txt');
  });
});
