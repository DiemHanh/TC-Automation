import { test as base } from '@playwright/test';
import { WebTablePage } from '../pages/WebTablePage';

export const test = base.extend<{ webTablePage: WebTablePage }>({
  webTablePage: async ({ page }, use) => use(new WebTablePage(page)),
});
