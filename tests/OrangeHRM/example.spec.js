// @ts-check
import { test, expect } from '@playwright/test';
import { GoogleConstants } from '../constants/GoogleConstants.js';
import { config } from 'dotenv';
config({ path: './config.env' });


test.describe('Playwright Login Test Suite', () => {

  test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Google Sample Test', async ({ page }) => {

    await page.goto('https://www.google.com/');
    page.getByRole('link', { name: 'Images' });

    // let titleOfThePage = GoogleConstants.IMAGE_ALT;
    // await expect(page).toHaveTitle(titleOfThePage);

    const ImageTextHeader = await page.locator('//img[@alt="Google Images"]').getAttribute('alt');
    console.log("Text Of The Image Is:" + ImageTextHeader);
    expect(ImageTextHeader).toBe(GoogleConstants.GOOGLE_PAGE_HEADER);



    const searchtext = 'Shree Swami Samarth';
    await page.locator('//textarea[@aria-label="Search"]').fill(searchtext);
    await page.waitForTimeout(5000);

    const elementsOnOage = page.locator('a');
    console.log("count of the elements are:" + await elementsOnOage.count());

    for (let i = 0; i < await elementsOnOage.count(); i++) {
      let textOfLinks = await elementsOnOage.nth(i).innerText();
      console.log(textOfLinks);

    }
  });

});


