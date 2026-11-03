import { test as base } from '@playwright/test';
import { StatusCodesPage } from '../pages/StatusCodesPage';

export const test = base.extend<{ statusCodesPage: StatusCodesPage }>({
  statusCodesPage: async ({ page }, use) => use(new StatusCodesPage(page)),
});
