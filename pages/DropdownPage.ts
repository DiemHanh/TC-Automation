import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DropdownPage extends BasePage {
  protected path = '/dropdown';

  readonly dropdown: Locator;
  readonly selectedOption: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = page.locator('#dropdown');
    this.selectedOption = this.dropdown.locator('option:checked');
  }

  async selectOption(optionText: string) {
    await this.dropdown.selectOption({ label: optionText });
  }
}
