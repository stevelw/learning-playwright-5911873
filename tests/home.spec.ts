import { test, expect } from '@playwright/test';

test("Home page", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  // Ensure signin link is present
  await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  
  // Check the title of the page
  await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

  // Check the count of items displayed
  const productGrid = page.locator(".col-md-9");
  await expect(productGrid.getByRole("link")).toHaveCount(9);
  expect( await productGrid.getByRole("link").count()).toBe(9);

  // Search for Thor Hammer and check the result
})