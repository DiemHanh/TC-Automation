import { test, expect } from '../fixtures';

test('TC15: TodoMVC - Add new todos', async ({ todoPage }) => {
  await test.step('2. Navigate to https://todomvc.com/examples/react/dist/', async () => {
    await todoPage.open();
  });

  await test.step('3. Type "Buy milk" in the input and press Enter', async () => {
    await todoPage.addTodo('Buy milk');
  });

  await test.step('4. Type "Buy groceries" in the input and press Enter', async () => {
    await todoPage.addTodo('Buy groceries');
  });

  await test.step('5. Verify the list has exactly 2 items', async () => {
    await expect(todoPage.todoItems).toHaveCount(2);
  });

  await test.step('6. Verify item texts are ["Buy milk", "Buy groceries"] in order', async () => {
    await expect(todoPage.todoLabels).toHaveText(['Buy milk', 'Buy groceries']);
  });
});
