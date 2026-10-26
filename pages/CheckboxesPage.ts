import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckboxesPage extends BasePage {
  protected path = '/checkboxes';

  readonly allCheckboxes: Locator;

  constructor(page: Page) {
    super(page);
    this.allCheckboxes = page.locator('#checkboxes input[type="checkbox"]');
  }

  checkbox(position: number) {
    return this.allCheckboxes.nth(position - 1);
  }

  async check(position: number) {
    await this.checkbox(position).check();
  }
}
