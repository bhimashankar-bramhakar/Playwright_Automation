
import { test, expect } from '@playwright/test';

import { FacebookConstants } from '../constants/FacebookConstants.js';

test.describe('Get By Role Test Suite', () => {

  test('getByRole', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const signUpLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_SIGN_UP_LINK });
    await signUpLink.click();
    await page.waitForTimeout(5000);

  });


  test('getByRole practice', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const messengerLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_MESSENGER_LINK });
    await messengerLink.click();
    await page.waitForTimeout(5000);
  });

  test('getByRole Practice For Link', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const contactLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_CONTACT_LINK });
    await contactLink.click();
    await page.waitForTimeout(5000);
  });

  test('getByRole Practice Test', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const helpLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_HELP_LINK });
    await helpLink.click();
    await page.waitForTimeout(5000);
  });

  test('getByRole Practice testt', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const developerLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_DEVELOPERS_LINK });
    await developerLink.click();
    await page.waitForTimeout(5000);
  });



  test('getByRole Practice Test new link', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const careersLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_CAREERS_LINK });
    await careersLink.click();
    await page.waitForTimeout(5000);
  });


  test('getByRole Practice new test', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const privacyCentreLink = page.getByRole('link', { name: FacebookConstants.FACEBOOK_PRIVACY_CENTRE_LINK });
    await expect(privacyCentreLink).toBeVisible();
    await privacyCentreLink.click();
    await page.waitForTimeout(5000);
  });

  test('Get Text Test', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    const text = page.locator('a');
    console.log("count of the elements are:" + await text.count());

    for (let i = 0; i < await text.count(); i++) {
      let textOfLinks = await text.nth(i).innerText();
      console.log(textOfLinks);
      if (textOfLinks.includes(FacebookConstants.FACEBOOK_MUSE_LINK)) {
        await text.nth(i).click();
      }
    }
  });

});
