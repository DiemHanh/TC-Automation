import { test as base } from '@playwright/test';
import { MultipleSelectPage } from '../pages/MultipleSelectPage';

export const test = base.extend<{ multipleSelectPage: MultipleSelectPage }>({
  multipleSelectPage: async ({ page }, use) => use(new MultipleSelectPage(page)),
});
