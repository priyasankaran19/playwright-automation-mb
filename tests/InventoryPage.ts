import { expect, type Locator, type Page } from '@playwright/test';
import data from './data.json';

export class InventoryPage {
  readonly page: Page;
  readonly getUserNameInput: Locator;
  readonly getPasswordInput: Locator;
  readonly getLoginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getUserNameInput = page.getByTestId(data.loginPage.locators.userName);
    this.getPasswordInput = page.getByTestId(data.loginPage.locators.password);
    this.getLoginBtn = page.getByTestId(data.loginPage.locators.loginbutton);
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }
  
  async isInventoryPage() {
    const url = this.page.url();

    return url.endsWith('/inventory.html');
  }
}