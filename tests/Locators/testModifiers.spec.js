import { test } from '@playwright/test'

test.describe('Test Modifiers Test Suite', () => {


    test.slow('Test Case 1', async function () {
        console.log("Test Case 1");
    })

    test.fixme('Test Case 2', async function () {
        console.log("Test Case 2");
    })

    test.skip('Test Case 3', async () => {
        console.log("Test Case 3");
    })

    test('Test Case 4', async () => {
        console.log("Test Case 4");
    })

})