const puppeteer = require('puppeteer');

// Catatan simpel

//menunngu ke load selektor yang akan di ketik
// await.page.waitForSelector("input#Masukkan id selektor");
// await page.waitForTimeout(5000);


bukaBrowser = async () => {
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1})

  // Navigate the page to a URL
    await page.goto("https://developer.chrome.com/");


    await browser.close();


};

// bukaBrowser();

testBrowser = async () => {
    
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1})

  // Navigate the page to a URL
    await page.goto("https://id.search.yahoo.com/search?fr=mcafee&type=E210ID91215G0&p=down%3Bpad+cromium");
    await page.type(

        #sbq-wrap
    );
    await browser.close();


};

testBrowser();