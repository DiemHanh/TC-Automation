import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebTablePage extends BasePage {
  protected path = '/tables';

  readonly table1: Locator;
  readonly table1Rows: Locator;

  constructor(page: Page) {
    super(page);
    this.table1 = page.locator('#table1');
    this.table1Rows = this.table1.locator('tbody tr');
  }

  async getAllRows() {
    const rows = [];
    const count = await this.table1Rows.count();
    for (let i = 0; i < count; i++) {
      const cells = this.table1Rows.nth(i).locator('td');
      const lastName = await cells.nth(0).innerText();
      const firstName = await cells.nth(1).innerText();
      const due = await cells.nth(3).innerText();
      rows.push({ firstName: firstName, lastName: lastName, due: due });
    }
    return rows;
  }

  rowByDue(due: string) {
    return this.table1Rows.filter({ hasText: due });
  }
}
