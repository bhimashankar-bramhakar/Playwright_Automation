import { test } from '@playwright/test'


test.describe('Arrow Method Test Suite', () => {


    test('Test Case 1', async function () {
        console.log("Test Case 1");
    })

    test('Test Case 2', async function () {
        console.log("Test Case 2");
    })

    test('Test Case 3', async () => {
        console.log("Test Case 3");
    })

})
