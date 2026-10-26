import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    viewport: { width: 1920, height: 1080 },
    screenshot: 'only-on-failure',
  },
});
