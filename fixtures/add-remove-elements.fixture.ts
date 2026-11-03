import { test as base } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/AddRemoveElementsPage';

export const test = base.extend<{ addRemoveElementsPage: AddRemoveElementsPage }>({
  addRemoveElementsPage: async ({ page }, use) => use(new AddRemoveElementsPage(page)),
});
