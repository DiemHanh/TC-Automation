import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrokenImagesPage extends BasePage {
  protected path = '/broken_images';

  readonly images: Locator;

  constructor(page: Page) {
    super(page);
    this.images = page.locator('.example img');
  }

  async getAllImageSrc() {
    const srcList = [];
    const count = await this.images.count();
    for (let i = 0; i < count; i++) {
      const src = await this.images.nth(i).getAttribute('src');
      srcList.push(src);
    }
    return srcList;
  }
}
