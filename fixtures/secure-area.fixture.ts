import { test as base } from '@playwright/test';
import { SecureAreaPage } from '../pages/SecureAreaPage';

export const test = base.extend<{ secureAreaPage: SecureAreaPage }>({
  secureAreaPage: async ({ page }, use) => use(new SecureAreaPage(page)),
});
