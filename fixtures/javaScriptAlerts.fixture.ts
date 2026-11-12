import { test as base } from '@playwright/test';
import { JavaScriptAlertsPage } from '../pages/JavaScriptAlertsPage';

export const test = base.extend<{ javaScriptAlertsPage: JavaScriptAlertsPage }>({
  javaScriptAlertsPage: async ({ page }, use) => use(new JavaScriptAlertsPage(page)),
});
