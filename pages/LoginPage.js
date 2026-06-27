import { LoginLocator } from "../locators/loginLocator";

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async openWebsite() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async login(username, password) {
    await this.page.fill(LoginLocator.username, username);
    await this.page.fill(LoginLocator.password, password);
    await this.page.click(LoginLocator.loginButton);
  }
}