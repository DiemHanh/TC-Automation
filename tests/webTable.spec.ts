import { test, expect } from '../fixtures';

test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage }) => {
  let rows: { firstName: string; lastName: string; due: string }[] = [];
  let maxPerson = { firstName: '', lastName: '', due: '' };

  await test.step('1. Open the tables page', async () => {
    await webTablePage.open();
  });

  await test.step('2. Verify table 1 is shown', async () => {
    await expect(webTablePage.table1).toBeVisible();
  });

  await test.step('3. Get first name, last name and due of all rows in table 1', async () => {
    rows = await webTablePage.getAllRows();
    expect(rows.length).toBe(4);
  });

  await test.step('4. Find the person with the largest due', async () => {
    maxPerson = rows[0];
    for (const row of rows) {
      const due = parseFloat(row.due.replace('$', ''));
      const maxDue = parseFloat(maxPerson.due.replace('$', ''));
      if (due > maxDue) {
        maxPerson = row;
      }
    }
  });

  await test.step('5. Verify the person with the largest due is "Jason Doe"', async () => {
    const fullName = maxPerson.firstName + ' ' + maxPerson.lastName;
    expect(fullName).toBe('Jason Doe');
    await expect(webTablePage.rowByDue(maxPerson.due)).toContainText(maxPerson.firstName);
    await expect(webTablePage.rowByDue(maxPerson.due)).toContainText(maxPerson.lastName);
  });
});
