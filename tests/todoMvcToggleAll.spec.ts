import { test, expect } from '../fixtures';

test('TC22: TodoMVC - Toggle all', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add 2 todos "Task One", "Task Two"', async () => {
    await todoPage.addTodo('Task One');
    await todoPage.addTodo('Task Two');
  });

  await test.step('3. Check the "toggle all" checkbox', async () => {
    await todoPage.checkToggleAll();
  });

  await test.step('4. Verify footer shows "0 items left"', async () => {
    await expect(todoPage.todoCount).toContainText('0 items left');
  });

  await test.step('5. Uncheck the "toggle all" checkbox', async () => {
    await todoPage.uncheckToggleAll();
  });

  await test.step('6. Verify footer shows "2 items left"', async () => {
    await expect(todoPage.todoCount).toContainText('2 items left');
  });
});
