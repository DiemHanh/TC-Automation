import { test as base } from '@playwright/test';
import { BrokenImagesPage } from '../pages/BrokenImagesPage';

export const test = base.extend<{ brokenImagesPage: BrokenImagesPage }>({
  brokenImagesPage: async ({ page }, use) => use(new BrokenImagesPage(page)),
});
