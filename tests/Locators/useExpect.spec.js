import { test, expect } from "@playwright/test"

test.describe('Expect Metho Use Suite', () => {


    test('Number Exppect', async function () {

        let number = 30
        expect(number).toBe(30)
        expect(number).toBeGreaterThan(29)
        expect(number).toBeLessThan(40)
    })


    test('Expect String  Data', async function () {

        const name = "Shree Swami Samarth"
        expect(name).toContain("Swami")
        expect(name).toBe('Shree Swami Samarth')
        expect(name.startsWith("Shree")).toBeTruthy()
        expect(name.endsWith("Samarth")).toBeFalsy()
    })
})