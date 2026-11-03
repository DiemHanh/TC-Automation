import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HoversPage extends BasePage {
  protected path = '/hovers';

  readonly firstAvatar: Locator;
  readonly firstUserName: Locator;
  readonly firstViewProfileLink: Locator;

  constructor(page: Page) {
    super(page);
    this.firstAvatar = page.locator('.figure').first();
    this.firstUserName = this.firstAvatar.locator('h5');
    this.firstViewProfileLink = this.firstAvatar.getByRole('link', { name: 'View profile' });
  }

  async hoverFirstAvatar() {
    await this.firstAvatar.hover();
  }
}
