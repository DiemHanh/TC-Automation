import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class TodoPage extends BasePage {
  protected path = 'https://todomvc.com/examples/react/dist/';

  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly todoLabels: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
    this.todoLabels = page.getByTestId('todo-item-label');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }
}
