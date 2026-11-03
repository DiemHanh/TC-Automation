import { test as base } from '@playwright/test';
import { DynamicControlsPage } from '../pages/DynamicControlsPage';

export const test = base.extend<{ dynamicControlsPage: DynamicControlsPage }>({
  dynamicControlsPage: async ({ page }, use) => use(new DynamicControlsPage(page)),
});
