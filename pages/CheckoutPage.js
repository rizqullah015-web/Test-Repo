import { CheckoutLocator } from "../locators/checkoutLocator";

export class CheckoutPage {
  constructor(page) {
    this.page = page;
  }

  async openCart() {
    await this.page.click(CheckoutLocator.cartIcon);
  }

  async clickCheckout() {
    await this.page.click(CheckoutLocator.checkoutButton);
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.page.fill(CheckoutLocator.firstName, firstName);
    await this.page.fill(CheckoutLocator.lastName, lastName);
    await this.page.fill(CheckoutLocator.postalCode, postalCode);

    await this.page.click(CheckoutLocator.continueButton);
  }

  async finishCheckout() {
    await this.page.click(CheckoutLocator.finishButton);
  }
}