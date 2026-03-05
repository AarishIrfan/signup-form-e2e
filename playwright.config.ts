import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  reporter: [
    ['list'], // console output
    ['html', { outputFolder: 'reports/html-report', open: 'never' }], // Playwright HTML report
    ['allure-playwright', { outputFolder: 'reports/allure-results' }], // Allure raw results
  ],
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
