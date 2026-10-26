import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class SecureAreaPage extends BasePage {
  protected path = '/secure';

  readonly heading: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Secure Area', exact: true });
    this.flashMessage = page.locator('#flash');
  }
}
