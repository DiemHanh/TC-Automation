import { BasePage } from './BasePage';

export class DownloadPage extends BasePage {
  protected path = '/download';

  fileLink(fileName: string) {
    return this.page.getByRole('link', { name: fileName, exact: true });
  }

  async downloadFile(fileName: string, savePath: string) {
    const downloadPromise = this.page.waitForEvent('download');
    await this.fileLink(fileName).click();
    const download = await downloadPromise;
    await download.saveAs(savePath);
  }
}
