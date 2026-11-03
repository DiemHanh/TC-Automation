import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddRemoveElementsPage extends BasePage {
  protected path = '/add_remove_elements/';

  readonly addButton: Locator;
  readonly deleteButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.addButton = page.getByRole('button', { name: 'Add Element' });
    this.deleteButtons = page.locator('.added-manually');
  }

  async clickAddElement() {
    await this.addButton.click();
  }

  async clickFirstDelete() {
    await this.deleteButtons.first().click();
  }
}
