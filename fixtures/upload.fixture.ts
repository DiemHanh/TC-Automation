import { test as base } from '@playwright/test';
import { UploadPage } from '../pages/UploadPage';

export const test = base.extend<{ uploadPage: UploadPage }>({
  uploadPage: async ({ page }, use) => use(new UploadPage(page)),
});
