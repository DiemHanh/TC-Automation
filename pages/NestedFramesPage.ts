import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class NestedFramesPage extends BasePage {
  protected path = '/nested_frames';

  readonly leftFrameBody: Locator;
  readonly middleFrameBody: Locator;
  readonly rightFrameBody: Locator;
  readonly bottomFrameBody: Locator;

  constructor(page: Page) {
    super(page);
    const topFrame = page.frameLocator('frame[name="frame-top"]');
    this.leftFrameBody = topFrame.frameLocator('frame[name="frame-left"]').locator('body');
    this.middleFrameBody = topFrame.frameLocator('frame[name="frame-middle"]').locator('body');
    this.rightFrameBody = topFrame.frameLocator('frame[name="frame-right"]').locator('body');
    this.bottomFrameBody = page.frameLocator('frame[name="frame-bottom"]').locator('body');
  }
}
