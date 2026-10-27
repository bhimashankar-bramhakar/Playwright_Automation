import { test, expect } from '@playwright/test'

test('Verify Automation Practice Website Title', async function ({ page }) {
    await page.goto("https://practice.expandtesting.com/dropdown")
    const titleOfThepgae = await page.title()
    console.log("Title:" + titleOfThepgae)
    expect(titleOfThepgae).toContain("Dropdown menus page for Automation Testing Practice")
    expect(page).toHaveTitle(/menus page for Automation/)
})

test(' Verify Dropdown Options', async function ({ page }) {
    await page.goto("https://practice.expandtesting.com/dropdown")
    const titleOfThepgae = await page.title()
    console.log("Title:" + titleOfThepgae)
    expect(titleOfThepgae).toContain("Dropdown menus page for Automation Testing Practice")
    const dropdown = page.locator("#dropdown")
    const dropdownOptions = await dropdown.allInnerTexts()
    console.log("Dropdown Options: " + dropdownOptions);
    dropdown.selectOption({ value: "2" })
    await page.waitForTimeout(2000)
    dropdown.selectOption({ value: "1" })
    await page.waitForTimeout(2000)
    dropdown.selectOption({ label: "Option 2" })
    await page.waitForTimeout(2000)
    dropdown.selectOption({ label: "Option 1" })
})

test(' Verify Dropdown Options Individually', async function ({ page }) {
    await page.goto("https://practice.expandtesting.com/dropdown")
    const titleOfThepgae = await page.title()
    console.log("Title:" + titleOfThepgae)
    expect(titleOfThepgae).toContain("Dropdown menus page for Automation Testing Practice")
    const dropdown = page.locator("#dropdown")
    const dropdownOptions = await dropdown.allInnerTexts()
    console.log("Dropdown Options: " + dropdownOptions);
    dropdown.selectOption({ value: "2" })
    await expect(dropdown.locator('option:checked')).toHaveText("Option 2") // verifying selected option
    await page.waitForTimeout(2000)
    dropdown.selectOption({ value: "1" })
    await expect(dropdown.locator('option:checked')).toHaveText("Option 1")   // verifying selected option
    await page.waitForTimeout(2000)
    dropdown.selectOption({ label: "Option 2" })
    await page.waitForTimeout(2000)
    dropdown.selectOption({ label: "Option 1" })
})

test(' Verify Country Dropdown Options Individually', async function ({ page }) {
    await page.goto("https://practice.expandtesting.com/dropdown")
    const titleOfThepgae = await page.title()
    console.log("Title:" + titleOfThepgae)
    expect(titleOfThepgae).toContain("Dropdown menus page for Automation Testing Practice")
    const dropdown = page.locator("#country")
    const dropdownOptions = await dropdown.allInnerTexts()
    const lengthOfCountry = await dropdown.count()
    console.log("Country Count: " + lengthOfCountry)
    console.log("Country Names: " + dropdownOptions)
    await dropdown.selectOption({ label: "India" })
    await expect(dropdown.locator('option:checked')).toHaveText("India")
    await page.waitForTimeout(2000)
    await dropdown.selectOption({ label: "Angola" })
    await expect(dropdown.locator('option:checked')).toHaveText("Angola")
    await page.waitForTimeout(2000)
    await dropdown.selectOption({ label: "Argentina" })
    await page.waitForTimeout(2000)
    await expect(dropdown.locator('option:checked')).toHaveText("Argentina")
    console.log("Login Successfull");
    
})