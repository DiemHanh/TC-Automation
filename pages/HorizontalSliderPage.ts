import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HorizontalSliderPage extends BasePage {
  protected path = '/horizontal_slider';

  readonly slider: Locator;
  readonly rangeValue: Locator;

  constructor(page: Page) {
    super(page);
    this.slider = page.locator('input[type="range"]');
    this.rangeValue = page.locator('#range');
  }

  async getValue() {
    return await this.rangeValue.innerText();
  }

  async pressArrowRight() {
    await this.slider.press('ArrowRight');
  }
}
