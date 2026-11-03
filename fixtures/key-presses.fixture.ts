import { test as base } from '@playwright/test';
import { KeyPressesPage } from '../pages/KeyPressesPage';

export const test = base.extend<{ keyPressesPage: KeyPressesPage }>({
  keyPressesPage: async ({ page }, use) => use(new KeyPressesPage(page)),
});
