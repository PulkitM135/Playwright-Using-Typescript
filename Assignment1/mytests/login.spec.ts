import { test, chromium } from '@playwright/test';

test('login-test', async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com/');

  const userName = page.locator('#user-name');
  const userPassword = page.locator('#password');
  const loginButton = page.locator('#login-button');
  
  await userName.fill('visual_user');
  await userPassword.fill('secret_sauce');
  await loginButton.click();

  await page.screenshot({ path: 'login.png' });
  
  await browser.close();
});
