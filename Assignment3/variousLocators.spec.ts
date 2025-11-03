import { test, expect } from "@playwright/test";

test("Demonstrate different locator strategies on SauceDemo", async ({ page }) => {
  try {
    await page.goto("https://www.saucedemo.com/");
    console.log("Navigated to SauceDemo login page");

    await page.locator("#user-name").fill("standard_user");
    console.log("Filled username using ID selector");

    await page.locator(".input_error.form_input[type='password']").fill("secret_sauce");
    console.log("Filled password using Class selector");

    await page.getByText("Login").click();
    console.log("Clicked login using Text selector");

    await expect(page).toHaveURL(/.*inventory.html/);
    console.log("Logged in successfully");

    const header = page.locator(".header_secondary_container .title");
    await expect(header).toHaveText("Products");
    console.log("Verified header using CSS selector");

    const firstAddBtn = page.locator("//button[text()='Add to cart']");
    await firstAddBtn.first().click();
    console.log("Clicked add to cart using XPath selector");

    console.log("Test completed successfully");

  } catch (err) {
    console.error("Test failed due to error:", err);
    throw err;
  }
});
