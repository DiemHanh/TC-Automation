import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class MultipleSelectPage extends BasePage {
  protected path = 'https://output.jsbin.com/osebed/2';

  readonly fruitsSelect: Locator;
  readonly selectedOptions: Locator;

  constructor(page: Page) {
    super(page);
    this.fruitsSelect = page.locator('#fruits');
    this.selectedOptions = this.fruitsSelect.locator('option:checked');
  }

  async selectOptions(values: string[]) {
    await this.fruitsSelect.selectOption(values);
  }
}
