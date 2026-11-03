import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ContextMenuPage extends BasePage {
  protected path = '/context_menu';

  readonly hotSpot: Locator;
  alertMessage = '';

  constructor(page: Page) {
    super(page);
    this.hotSpot = page.locator('#hot-spot');
  }

  async rightClickHotSpotAndDismiss() {
    this.page.once('dialog', async (dialog) => {
      this.alertMessage = dialog.message();
      await dialog.dismiss();
    });
    await this.hotSpot.click({ button: 'right' });
  }
}
