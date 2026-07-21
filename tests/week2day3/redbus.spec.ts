import { test, chromium } from '@playwright/test';

test('Launch RedBus in Edge and verify title and URL', async () => {

  // Launch Microsoft Edge
  const browser = await chromium.launch({ channel: 'msedge', headless: false
  });

  // Create a new page
  const page = await browser.newPage();

  // Navigate to RedBus
  await page.goto('https://www.redbus.in');

  // Get the title and URL
  const title = await page.title();
  const url = page.url();

  // Print the title and URL
  console.log("Page Title:", title);
  console.log("Page URL:", url);

  // Verify the URL
  console.log("URL Verification:", url === 'https://www.redbus.in/');

  // Close the browser
  await browser.close();
});