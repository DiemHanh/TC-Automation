import { test, expect } from '../fixtures';

test('TC17: TodoMVC - Delete a todo', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add todo "Pay bills"', async () => {
    await todoPage.addTodo('Pay bills');
  });

  await test.step('3. Hover on "Pay bills"', async () => {
    await todoPage.hoverTodo('Pay bills');
  });

  await test.step('4. Click the "×" delete button of "Pay bills"', async () => {
    await todoPage.clickDeleteButton('Pay bills');
  });

  await test.step('5. Verify "Pay bills" is no longer in the list', async () => {
    await expect(todoPage.todoItem('Pay bills')).toHaveCount(0);
  });
});
