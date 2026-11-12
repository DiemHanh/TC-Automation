import { test, expect } from '../fixtures';

test('TC15: TodoMVC - Add new todos', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add todo "Buy milk"', async () => {
    await todoPage.addTodo('Buy milk');
  });

  await test.step('3. Add todo "Buy groceries"', async () => {
    await todoPage.addTodo('Buy groceries');
  });

  await test.step('4. Verify the list has 2 todos', async () => {
    await expect(todoPage.todoItems).toHaveCount(2);
  });

  await test.step('5. Verify the todos are "Buy milk" and "Buy groceries" in order', async () => {
    await expect(todoPage.todoLabels).toHaveText(['Buy milk', 'Buy groceries']);
  });
});
