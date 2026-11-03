import { test as base } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

export const test = base.extend<{ todoPage: TodoPage }>({
  todoPage: async ({ page }, use) => use(new TodoPage(page)),
});
