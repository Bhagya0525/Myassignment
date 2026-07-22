import {test} from"@playwright/test";

test("launch browser", async ({page}) => {
    await page.goto("https://www.flipkart.com/")
    console.log(await page.title());
    console.log(await page.url());
    
})