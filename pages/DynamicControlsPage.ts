import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicControlsPage extends BasePage {
  protected path = '/dynamic_controls';

  readonly checkboxForm: Locator;
  readonly checkbox: Locator;
  readonly removeButton: Locator;
  readonly addButton: Locator;
  readonly message: Locator;

  constructor(page: Page) {
    super(page);
    this.checkboxForm = page.locator('#checkbox-example');
    this.checkbox = this.checkboxForm.locator('input[type="checkbox"]');
    this.removeButton = this.checkboxForm.getByRole('button', { name: 'Remove' });
    this.addButton = this.checkboxForm.getByRole('button', { name: 'Add' });
    this.message = this.checkboxForm.locator('#message');
  }

  async clickRemove() {
    await this.removeButton.click();
  }

  async clickAdd() {
    await this.addButton.click();
  }
}
