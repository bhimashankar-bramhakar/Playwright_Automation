import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';


test('File Upload Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileInput = page.locator('//input[@type="file"]').nth(0);
    const filePath = 'TestData/SampleFiles/sample.pdf'
    await fileInput.setInputFiles(filePath);
    await page.click('#file-submit');
    await expect(page.locator('#uploaded-files')).toBeVisible();
});

test('Random File Upload Test', async ({ page }) => {
    const randomNumber = Math.floor(Math.random() * 100000);
    const fileName = `TestFile_${randomNumber}.pdf`;
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFileSync(filePath, 'This is a randomly generated test PDF file.');
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileInput = page.locator('//input[@type="file"]').nth(0);
    await fileInput.setInputFiles(filePath);
    await page.click('#file-submit');
    await expect(page.locator('#uploaded-files')).toHaveText(fileName);
    fs.unlinkSync(filePath);
});


test('File Upload using FileChooser', async ({ page }) => {
    await page.goto('https://blazorise.com/docs/components/file-picker');
    const fileChooserPromise = page.waitForEvent('filechooser')
    await page.getByText('Choose files').first().click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles({
        name: 'bhima.pdf',
        mimeType: 'text/plain',
        buffer: Buffer.from('Shree Swami Samarth')
    });
});

test('File Uploade Usinf filechooser not creating run time file', async ({ page }) => {
    await page.goto('https://blazorise.com/docs/components/file-picker');
    const fileChooserEvent = page.waitForEvent('filechooser')
    await page.locator("//span[@class='text-muted']").nth(0).click()
    const fileChooser = await fileChooserEvent;
    await fileChooser.setFiles('TestData/SampleFiles/sample.pdf');
})

test('File Uploade Usinf filechooser not creating run time', async ({ page }) => {

    await page.goto('https://blazorise.com/docs/components/file-picker');
    const fileChooserEvent = page.waitForEvent('filechooser')
    await page.locator("//span[@class='text-muted']").nth(0).click()
    const setFileName = await fileChooserEvent;
    await setFileName.setFiles({
        name: 'bhima.pdf',
        mimeType: 'text/plain',
        buffer: Buffer.from('Shree Swami Samarth')
    })
})

test('Multiple File Upload Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    const fileInput = page.locator('//input[@type="file"]').nth(0);
    const filePath = 'TestData/SampleFiles/sample.pdf'
    const filePath_2 = 'TestData/SampleFiles/sample2.pdf'
    await fileInput.setInputFiles([
       filePath
    ]);
    await page.click('#file-submit');
    await expect(page.locator('#uploaded-files')).toBeVisible();
});