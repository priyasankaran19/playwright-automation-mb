import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginPage';


test.describe('Login Page', function(){

test('Verify Valid Login User Details',async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  const InventoryPage = await login.performValidLogin();
  expect(InventoryPage.isInventoryPage()).toBeTruthy();
})
test('Verify InValid Login User Details',async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  const error = await login.performInValidLogin();
  expect(error).toBeTruthy();
})
  
});