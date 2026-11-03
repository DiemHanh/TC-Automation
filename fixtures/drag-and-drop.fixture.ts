import { test as base } from '@playwright/test';
import { DragAndDropPage } from '../pages/DragAndDropPage';

export const test = base.extend<{ dragAndDropPage: DragAndDropPage }>({
  dragAndDropPage: async ({ page }, use) => use(new DragAndDropPage(page)),
});
