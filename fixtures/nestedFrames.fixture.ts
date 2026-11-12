import { test as base } from '@playwright/test';
import { NestedFramesPage } from '../pages/NestedFramesPage';

export const test = base.extend<{ nestedFramesPage: NestedFramesPage }>({
  nestedFramesPage: async ({ page }, use) => use(new NestedFramesPage(page)),
});
