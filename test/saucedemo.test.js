const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");

describe("SauceDemo Web UI Automation", function () {
  this.timeout(60000);

  let driver;

  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().window().maximize();
  });

  afterEach(async function () {
    await driver.quit();
  });

  it("Success Login", async function () {
    await driver.get("https://www.saucedemo.com/");

    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    const titleElement = await driver.wait(
      until.elementLocated(By.className("title")),
      10000
    );

    const pageTitle = await titleElement.getText();

    assert.strictEqual(pageTitle, "Products");
  });

  it("Sort Product A-Z", async function () {
    await driver.get("https://www.saucedemo.com/");

    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();

    await driver.wait(until.elementLocated(By.className("title")), 10000);

    const sortDropdown = await driver.findElement(By.className("product_sort_container"));
    await sortDropdown.sendKeys("az");

    const productElements = await driver.findElements(By.className("inventory_item_name"));

    const productNames = [];

    for (let product of productElements) {
      productNames.push(await product.getText());
    }

    const sortedProductNames = [...productNames].sort();

    assert.deepStrictEqual(productNames, sortedProductNames);
  });
});