import { expect, type Locator, type Page } from '@playwright/test';
import data from './data.json';
import { InventoryPage } from './InventoryPage';

export class LoginPage {
  readonly page: Page;
  readonly getUserNameInput: Locator;
  readonly getPasswordInput: Locator;
  readonly getLoginBtn: Locator;
  readonly getErrorTxt: Locator

  constructor(page: Page) {
    this.page = page;
    this.getUserNameInput = page.getByTestId(data.loginPage.locators.userName);
    this.getPasswordInput = page.getByTestId(data.loginPage.locators.password);
    this.getLoginBtn = page.getByTestId(data.loginPage.locators.loginbutton);
    this.getErrorTxt = page.getByTestId(data.loginPage.locators.errortxt);
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }
  async performValidLogin() {
    await this.getUserNameInput.fill(data.loginPage.userData.userName);
    await this.getPasswordInput.fill(data.loginPage.userData.password);
    await this.getLoginBtn.click();
  
    return new InventoryPage(this.page)
  }
  async performInValidLogin() {
    await this.getUserNameInput.fill(data.loginPage.invalidData.userName);
    await this.getPasswordInput.fill(data.loginPage.invalidData.password);
    await this.getLoginBtn.click();
    const error = await this.getErrorTxt.innerHTML();
    return error;
  }
  
}