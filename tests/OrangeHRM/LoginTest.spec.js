
import { test, expect } from '@playwright/test';
import { LoginPageConstants } from '../constants/OrangeHRM_Constants.js';

test.describe('orange HRM Login Test Suite', () => {

    test('Verify Title Of the Page', async function ({ page }) {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const titleOfThePage = await page.title();
        console.log('Title: ' + titleOfThePage);
        expect(titleOfThePage).toContain(LoginPageConstants.ORANGE_HRM_TITLE);
        await page.screenshot({path: 'screenshots/verified_Title_sc.png', fullPage: true});
        
    });

    test('Verify Login Title', async function ({ page }) {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const loginPageText = await page.locator("//h5[contains(@class,'orangehrm-login-title')]").innerText();
        console.log('Login Page Text: ' + loginPageText);
        expect(loginPageText).toContain(LoginPageConstants.LOGIN_PAGE_TITLE);
        await page.screenshot({
            path: 'screenshots/Verify_Login_Title_sc.png', fullPage: true
        });
    });

    test('Verify Login Functionality', async function ({ page }) {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).fill(LoginPageConstants.USERNAME);
        await page.getByRole('textbox', { name: 'Password' }).fill(LoginPageConstants.PASSWORD);
        await page.getByRole('button', { name: 'Login' }).click();
        const headerText = await page.locator("//h6[contains(@class,'topbar-header')]").innerText();
        console.log('Header Text: ' + headerText);
        expect(headerText).toContain(LoginPageConstants.DASHBOARD_HEADER);
        await page.screenshot({
            path: 'screenshots/Verified_Login_Functionality_sc.png', fullPage: true
        });
    });

    // fill() fills the input directly.
    // pressSequentially() types each character sequentially.
    test('Verify Login With PressSequentially', async function ({ page }) {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).pressSequentially(LoginPageConstants.USERNAME, { delay: 100 });
        await page.getByRole('textbox', { name: 'Password' }).pressSequentially(LoginPageConstants.PASSWORD, { delay: 100 });
        await page.getByRole('button', { name: 'Login' }).click();
        const headerText = await page.locator("//h6[contains(@class,'topbar-header')]").innerText();
        console.log('Header Text: ' + headerText);
        expect(headerText).toContain(LoginPageConstants.DASHBOARD_HEADER);
        await page.screenshot({
            path: 'screenshots/Verified_Login_With_PressSequentially_sc.png', fullPage: true
        });
    });

});
