import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

export const test = base.extend<{ homePage: HomePage }>({
  homePage: async ({ page }, use) => use(new HomePage(page)),
});
