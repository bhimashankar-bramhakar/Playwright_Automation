
import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: !!process.env.CI,
    viewport: null,
    video: 'on',
    screenshot: 'on',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      args: ['--start-maximized']
    }
  },

  projects: [
    {
      name: 'Regression_Suite',
      // testMatch: [
      //   '**/getByRole.spec.js',
      //   '**/testModifiers.spec.js',
      //   '**/testsWithoutArowMethod.spec.js',
      //   '**/timeOutUses.spec.js',
      //   '**/useExpect.spec.js',
      //   '**/example.spec.js',
      //   '**/LoginTest.spec.js'
      // ]
      testMatch: '**/*.spec.js'
    }
  ]
});
