import { test as base } from '@playwright/test';
import { DownloadPage } from '../pages/DownloadPage';

export const test = base.extend<{ downloadPage: DownloadPage }>({
  downloadPage: async ({ page }, use) => use(new DownloadPage(page)),
});
