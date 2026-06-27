import { InventoryLocator } from "../locators/inventoryLocator";

export class InventoryPage {
  constructor(page) {
    this.page = page;
  }

  async addProductToCart() {
    await this.page.click(InventoryLocator.addToCartButton);
  }

  async openCart() {
    await this.page.click(InventoryLocator.cartIcon);
  }
}