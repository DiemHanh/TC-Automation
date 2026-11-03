import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class JavaScriptAlertsPage extends BasePage {
  protected path = '/javascript_alerts';

  readonly jsAlertButton: Locator;
  readonly jsConfirmButton: Locator;
  readonly jsPromptButton: Locator;
  readonly result: Locator;
  dialogMessage = '';

  constructor(page: Page) {
    super(page);
    this.jsAlertButton = page.getByRole('button', { name: 'Click for JS Alert' });
    this.jsConfirmButton = page.getByRole('button', { name: 'Click for JS Confirm' });
    this.jsPromptButton = page.getByRole('button', { name: 'Click for JS Prompt' });
    this.result = page.locator('#result');
  }

  async clickJsAlertAndAccept() {
    this.page.once('dialog', async (dialog) => {
      this.dialogMessage = dialog.message();
      await dialog.accept();
    });
    await this.jsAlertButton.click();
  }

  async clickJsConfirmAndCancel() {
    this.page.once('dialog', async (dialog) => {
      this.dialogMessage = dialog.message();
      await dialog.dismiss();
    });
    await this.jsConfirmButton.click();
  }

  async clickJsPromptAndEnterText(text: string) {
    this.page.once('dialog', async (dialog) => {
      this.dialogMessage = dialog.message();
      await dialog.accept(text);
    });
    await this.jsPromptButton.click();
  }
}
