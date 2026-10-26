import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class UploadPage extends BasePage {
  protected path = '/upload';

  readonly fileInput: Locator;
  readonly uploadButton: Locator;
  readonly uploadedFiles: Locator;

  constructor(page: Page) {
    super(page);
    this.fileInput = page.locator('#file-upload');
    this.uploadButton = page.locator('#file-submit');
    this.uploadedFiles = page.locator('#uploaded-files');
  }

  async attachFile(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }

  async clickUpload() {
    await this.uploadButton.click();
  }
}
