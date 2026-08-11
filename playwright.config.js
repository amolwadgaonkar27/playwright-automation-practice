const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    timeout: 30000,
    expect: { timeout: 5000 },
    fullyParallel: false,
    retries: 0,
    workers: 1,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        viewport: { width: 1280, height: 720 }
    }
});
