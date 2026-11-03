import { test, expect } from '../fixtures';

test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage }) => {
  let rows: { firstName: string; lastName: string; due: string }[] = [];
  let maxPerson = { firstName: '', lastName: '', due: '' };

  await test.step('2. Navigate to https://the-internet.herokuapp.com/tables', async () => {
    await webTablePage.open();
  });

  await test.step('3. Focus on #table1', async () => {
    await expect(webTablePage.table1).toBeVisible();
  });

  await test.step('4. Extract all rows (firstName, lastName, due amount)', async () => {
    rows = await webTablePage.getAllRows();
    expect(rows.length).toBe(4);
  });

  await test.step('5. Find the person with the largest due amount', async () => {
    maxPerson = rows[0];
    for (const row of rows) {
      const due = parseFloat(row.due.replace('$', ''));
      const maxDue = parseFloat(maxPerson.due.replace('$', ''));
      if (due > maxDue) {
        maxPerson = row;
      }
    }
  });

  await test.step('6. Verify the person\'s full name matches the value shown on the page', async () => {
    const fullName = maxPerson.firstName + ' ' + maxPerson.lastName;
    expect(fullName).toBe('Jason Doe');
    await expect(webTablePage.rowByDue(maxPerson.due)).toContainText(maxPerson.firstName);
    await expect(webTablePage.rowByDue(maxPerson.due)).toContainText(maxPerson.lastName);
  });
});
