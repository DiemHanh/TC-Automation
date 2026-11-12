import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  protected path = '/';

  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.locator('h1');
  }

  async takeFullPageScreenshot(filePath: string) {
    return await this.page.screenshot({ path: filePath, fullPage: true });
  }

  async takeHeadingScreenshot(filePath: string) {
    return await this.heading.screenshot({ path: filePath });
  }
}
