import { test, expect } from '../fixtures';

test('TC16: TodoMVC - Mark todo as completed', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add todo "Buy milk"', async () => {
    await todoPage.addTodo('Buy milk');
  });

  await test.step('3. Click the toggle checkbox of "Buy milk"', async () => {
    await todoPage.markCompleted('Buy milk');
  });

  await test.step('4. Verify the "Buy milk" toggle is checked', async () => {
    await expect(todoPage.todoToggle('Buy milk')).toBeChecked();
  });

  await test.step('5. Verify footer shows "0 items left"', async () => {
    await expect(todoPage.todoCount).toContainText('0 items left');
  });
});
