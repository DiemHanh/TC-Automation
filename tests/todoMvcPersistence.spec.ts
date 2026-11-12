import { test, expect } from '../fixtures';

test('TC21: TodoMVC - Persistence across page refresh', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add todo "Call mom"', async () => {
    await todoPage.addTodo('Call mom');
  });

  await test.step('3. Verify "Call mom" is in the list', async () => {
    await expect(todoPage.todoLabels).toHaveText(['Call mom']);
  });

  await test.step('4. Reload the page', async () => {
    await todoPage.reload();
  });

  await test.step('5. Verify "Call mom" is still in the list', async () => {
    await expect(todoPage.todoLabels).toHaveText(['Call mom']);
  });
});
