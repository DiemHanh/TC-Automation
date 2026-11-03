import { test as base } from '@playwright/test';
import { ContextMenuPage } from '../pages/ContextMenuPage';

export const test = base.extend<{ contextMenuPage: ContextMenuPage }>({
  contextMenuPage: async ({ page }, use) => use(new ContextMenuPage(page)),
});
