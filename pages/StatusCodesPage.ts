import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class StatusCodesPage extends BasePage {
  protected path = '/status_codes';

  readonly pageContent: Locator;
  readonly hereLink: Locator;

  constructor(page: Page) {
    super(page);
    this.pageContent = page.locator('.example');
    this.hereLink = this.pageContent.getByRole('link', { name: 'here', exact: true });
  }

  async clickStatusCode(code: string) {
    await this.pageContent.getByRole('link', { name: code, exact: true }).click();
  }

  async clickHere() {
    await this.hereLink.click();
  }
}
