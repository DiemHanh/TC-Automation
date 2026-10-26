import { Page } from '@playwright/test';

export class BasePage {
  protected path = '/';

  constructor(protected page: Page) {}

  async open() {
    await this.page.goto(this.path);
  }
}
