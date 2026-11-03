import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class KeyPressesPage extends BasePage {
  protected path = '/key_presses';

  readonly targetInput: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    super(page);
    this.targetInput = page.locator('#target');
    this.result = page.locator('#result');
  }

  async pressKey(key: string) {
    await this.targetInput.press(key);
  }
}
