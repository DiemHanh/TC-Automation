import { test, expect } from '../fixtures';

test('TC18: TodoMVC - Edit/rename a todo', async ({ todoPage }) => {
  await test.step('1. Open the TodoMVC page', async () => {
    await todoPage.open();
  });

  await test.step('2. Add todo "Walk the dog"', async () => {
    await todoPage.addTodo('Walk the dog');
  });

  await test.step('3. Double-click on "Walk the dog"', async () => {
    await todoPage.doubleClickTodo('Walk the dog');
  });

  await test.step('4. Clear the edit input and type "Walk the dog (30 min)"', async () => {
    await todoPage.fillEditInput('Walk the dog (30 min)');
  });

  await test.step('5. Press Enter to save', async () => {
    await todoPage.pressEnterInEditInput();
  });

  await test.step('6. Verify the todo now shows "Walk the dog (30 min)"', async () => {
    await expect(todoPage.todoLabels).toHaveText(['Walk the dog (30 min)']);
  });
});
