import { test, chromium, BrowserContext, Page } from "@playwright/test";

test("login-test", async () => {
  const browser = await chromium.launch({ headless: false });
  try {
    //BrowserContext1
    const browserContext1: BrowserContext = await browser.newContext();
    const page1: Page = await browserContext1.newPage();

    //BrowserContext2
    const browserContext2: BrowserContext = await browser.newContext();
    const page2: Page = await browserContext2.newPage();

    await page1.goto("https://www.saucedemo.com/");

    const userName1 = page1.locator("#user-name");
    const userPassword1 = page1.locator("#password");
    const loginButton1 = page1.locator("#login-button");

    await userName1.fill("visual_user");
    await userPassword1.fill("secret_sauce");
    await loginButton1.click();

    await page2.goto("https://www.saucedemo.com/");

    const userName2 = page2.locator("#user-name");
    const userPassword2 = page2.locator("#password");
    const loginButton2 = page2.locator("#login-button");

    await userName2.fill("standard_user");
    await userPassword2.fill("secret_sauce");
    await loginButton2.click();
    await page1.screenshot({ path: "login1.png" });
    await page2.screenshot({ path: "login2.png" });
  } catch (error) {
    console.error("Error during test execution: ", error);
    throw error;
  } finally {
    await browser.close();
  }
});
