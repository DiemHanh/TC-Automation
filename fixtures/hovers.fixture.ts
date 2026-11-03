import { test as base } from '@playwright/test';
import { HoversPage } from '../pages/HoversPage';

export const test = base.extend<{ hoversPage: HoversPage }>({
  hoversPage: async ({ page }, use) => use(new HoversPage(page)),
});
