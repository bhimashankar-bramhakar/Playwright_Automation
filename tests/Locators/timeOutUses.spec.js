import { test, expect } from '@playwright/test'
import { FacebookConstants } from '../constants/FacebookConstants.js';

test.describe('Timeout Uses Suite', () => {


    test('Test Title Of Instagram', async function ({ page }) {
        await page.goto("https://opensource-demo.orangehrmlive.com/")

        const titleOfThePage = await page.title()
        console.log("Title: " + titleOfThePage);
        expect(titleOfThePage).toContain(FacebookConstants.TITLE_OF_APPLICATION)
        expect(titleOfThePage).toBe("OrangeHRM")
    })

    test('Verify Application Url', async function ({ page }) {
        await page.goto("https://opensource-demo.orangehrmlive.com/")
        const urlOfThePage = page.url();
        console.log("Page Url: " + urlOfThePage);
        expect(urlOfThePage).toBe(FacebookConstants.URL_OF_THE_PAGE)
        expect(urlOfThePage).toContain("orangehrmlive.com")
    })

})