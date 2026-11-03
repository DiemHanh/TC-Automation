import { test as base } from '@playwright/test';
import { CheckboxesPage } from '../pages/CheckboxesPage';

export const test = base.extend<{ checkboxesPage: CheckboxesPage }>({
  checkboxesPage: async ({ page }, use) => use(new CheckboxesPage(page)),
});
