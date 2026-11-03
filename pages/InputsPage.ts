import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class InputsPage extends BasePage {
  protected path = '/inputs';

  readonly numberInput: Locator;

  constructor(page: Page) {
    super(page);
    this.numberInput = page.locator('.example input[type="number"]');
  }

  async fillNumber(value: string) {
    await this.numberInput.fill(value);
  }

  async pressKey(key: string) {
    await this.numberInput.press(key);
  }
}
