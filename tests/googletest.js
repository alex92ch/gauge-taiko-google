const { openTab, focus, textBox, openBrowser, goto, click, image, write, closeBrowser, press, switchTo } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless,
    })
});

beforeSpec(async () => {
    await goto('http://google.com');
    await click('I agree');
    await openTab();
    await goto('http://wikipedia.org/');

});

afterSuite(async () => {
    await closeBrowser();
});

step("Switch to Google", async function() {
    await switchTo(/Google/);
});

step("Search for <obj> Pic", async function(obj) {
    await focus(textBox({name: 'q'}));
    await write(obj);
    await press('Enter');
    await click('Images');
});

step("Open <obj> Pic", async function(obj) {
    await click(image(obj));
    await goto('http://google.com');
});

step("Google Mainpage", async function() {
    await goto('http://google.com');
});
step("Wiki Mainpage", async function() {
    await goto('http://wikipedia.org/');
});

step("Switch to Wikipedia", async function() {
    await switchTo(/Wikipedia/);
    await click('English');
});

step("Search for <obj> Descript", async function(obj) {
    await focus(textBox({id: 'searchInput'}));
    await write(obj);
    await press('Enter');
});