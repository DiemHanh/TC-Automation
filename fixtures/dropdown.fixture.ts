import { test as base } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

export const test = base.extend<{ dropdownPage: DropdownPage }>({
  dropdownPage: async ({ page }, use) => use(new DropdownPage(page)),
});
