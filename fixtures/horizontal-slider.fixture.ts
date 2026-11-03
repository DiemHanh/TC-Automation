import { test as base } from '@playwright/test';
import { HorizontalSliderPage } from '../pages/HorizontalSliderPage';

export const test = base.extend<{ horizontalSliderPage: HorizontalSliderPage }>({
  horizontalSliderPage: async ({ page }, use) => use(new HorizontalSliderPage(page)),
});
