import { test, expect } from "@playwright/test"


// by default PW will auto dismiss
// if u need to capture text or you need to accept/cancel or you need to enter then only register dialog 
// it must be registered before actual event
// page.on() - will be valid for whole page and will get triggered for every alert
// page.once() - will be valid for once dialog event and will get triggered for single alert

test("Registration New User", async function ({ page }) {
    page.on("dialog", async dialog => {
        let msg = dialog.message()
        console.log("Alert message is " + msg);
        expect(msg).toBe("I am a JS Alert")
        await dialog.accept()
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.getByText("Click for JS Alert").click()
})

test("Registration New User For Confirm", async function ({ page }) {
    page.on("dialog", async dialog => {
        let msg = dialog.message()
        console.log("Alert message is " + msg);
        expect(msg).toBe("I am a JS Confirm")
        await page.waitForTimeout(5000)
        //await dialog.accept()  // for ok
        await dialog.dismiss() // for cancel
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.getByText("Click for JS Confirm").click()
})

test("Registration New User For Prompt", async function ({ page }) {
    page.on("dialog", async dialog => {
        let msg = dialog.message()
        console.log("Alert message is " + msg);
        expect(msg).toBe("I am a JS prompt")
        await dialog.accept("Playwright")  // for ok
        //await dialog.dismiss() // for cancel
    })
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await page.getByText("Click for JS Prompt").click()
})


