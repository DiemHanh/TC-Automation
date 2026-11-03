import { test as base } from '@playwright/test';
import { InputsPage } from '../pages/InputsPage';

export const test = base.extend<{ inputsPage: InputsPage }>({
  inputsPage: async ({ page }, use) => use(new InputsPage(page)),
});
