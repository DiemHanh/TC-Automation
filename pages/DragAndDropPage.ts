import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DragAndDropPage extends BasePage {
  protected path = '/drag_and_drop';

  readonly columnA: Locator;
  readonly columnB: Locator;

  constructor(page: Page) {
    super(page);
    this.columnA = page.locator('#column-a');
    this.columnB = page.locator('#column-b');
  }

  async dragAToB() {
    await this.columnA.dragTo(this.columnB);
  }
}
