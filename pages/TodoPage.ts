import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class TodoPage extends BasePage {
  protected path = 'https://todomvc.com/examples/react/dist/';

  readonly newTodoInput: Locator;
  readonly todoItems: Locator;
  readonly todoLabels: Locator;
  readonly editInput: Locator;
  readonly todoCount: Locator;
  readonly clearCompletedButton: Locator;
  readonly toggleAllCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.newTodoInput = page.getByPlaceholder('What needs to be done?');
    this.todoItems = page.getByTestId('todo-item');
    this.todoLabels = page.getByTestId('todo-item-label');
    this.editInput = page.locator('.todo-list input.edit');
    this.todoCount = page.locator('.todo-count');
    this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });
    this.toggleAllCheckbox = page.getByTestId('toggle-all');
  }

  todoItem(text: string) {
    return this.todoItems.filter({ hasText: text });
  }

  todoToggle(text: string) {
    return this.todoItem(text).getByTestId('todo-item-toggle');
  }

  async addTodo(text: string) {
    await this.newTodoInput.fill(text);
    await this.newTodoInput.press('Enter');
  }

  async markCompleted(text: string) {
    await this.todoToggle(text).check();
  }

  async hoverTodo(text: string) {
    await this.todoItem(text).hover();
  }

  async clickDeleteButton(text: string) {
    await this.todoItem(text).getByTestId('todo-item-button').click();
  }

  async doubleClickTodo(text: string) {
    await this.todoItem(text).getByTestId('todo-item-label').dblclick();
  }

  async fillEditInput(text: string) {
    await this.editInput.clear();
    await this.editInput.fill(text);
  }

  async pressEnterInEditInput() {
    await this.editInput.press('Enter');
  }

  async clickClearCompleted() {
    await this.clearCompletedButton.click();
  }

  async clickFilter(name: string) {
    await this.page.getByRole('link', { name: name, exact: true }).click();
  }

  async checkToggleAll() {
    await this.toggleAllCheckbox.check();
  }

  async uncheckToggleAll() {
    await this.toggleAllCheckbox.uncheck();
  }

  async reload() {
    await this.page.reload();
  }
}
