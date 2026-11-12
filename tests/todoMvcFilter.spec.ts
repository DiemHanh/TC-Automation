import { test, expect } from '../fixtures';

test('TC20: TodoMVC - Filter All/Active/Completed', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add 2 todos "Alpha", "Beta"', async () => {
    await todoPage.addTodo('Alpha');
    await todoPage.addTodo('Beta');
  });

  await test.step('3. Mark "Beta" as completed', async () => {
    await todoPage.markCompleted('Beta');
  });

  await test.step('4. Click "Active" filter and verify only "Alpha" is shown', async () => {
    await todoPage.clickFilter('Active');
    await expect(todoPage.todoLabels).toHaveText(['Alpha']);
  });

  await test.step('5. Click "Completed" filter and verify only "Beta" is shown', async () => {
    await todoPage.clickFilter('Completed');
    await expect(todoPage.todoLabels).toHaveText(['Beta']);
  });

  await test.step('6. Click "All" filter and verify "Alpha" and "Beta" are shown', async () => {
    await todoPage.clickFilter('All');
    await expect(todoPage.todoLabels).toHaveText(['Alpha', 'Beta']);
  });
});
