import { test, expect } from '../fixtures';

test('TC19: TodoMVC - Clear completed todos', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add 3 todos "Task A", "Task B", "Task C"', async () => {
    await todoPage.addTodo('Task A');
    await todoPage.addTodo('Task B');
    await todoPage.addTodo('Task C');
  });

  await test.step('3. Mark "Task B" as completed', async () => {
    await todoPage.markCompleted('Task B');
  });

  await test.step('4. Mark "Task C" as completed', async () => {
    await todoPage.markCompleted('Task C');
  });

  await test.step('5. Click the "Clear completed" button', async () => {
    await todoPage.clickClearCompleted();
  });

  await test.step('6. Verify only "Task A" remains in the list', async () => {
    await expect(todoPage.todoLabels).toHaveText(['Task A']);
  });

  await test.step('7. Verify footer shows "1 item left"', async () => {
    await expect(todoPage.todoCount).toContainText('1 item left');
  });
});
