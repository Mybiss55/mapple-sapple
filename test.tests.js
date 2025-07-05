import { Builder } from 'selenium-webdriver';

(async function openSeleniumGrid() {
    // Replace with your Selenium Grid URL if different
    const gridUrl = 'http://grid:4444/wd/hub';

    const capabilities = {
        browserName: 'chrome',
        'se:recordVideo': true,
    };

    const driver = await new Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();

    try {
        // Wait a bit to see the page
        await driver.sleep(2000);

        await driver.get('http://google.com');
        // Wait a bit to see the page
        await driver.sleep(2000);

    } finally {
        await driver.quit();
    }
})();